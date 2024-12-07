import { Breadcrumb, Button, Input } from "antd";
import React from "react";

import useHandler from "./controller";

export default function CartPage() {
  const { data } = useHandler();

  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "Cart",
            },
          ]}
        />
      </div>

      <table className="w-full hidden md:table table-fixed">
        <thead className="w-full">
          <tr className="w-full h-[72px] rounded-[4px] shadow-md border">
            <th className="md:w-[350px] lg:w-[500px] font-normal text-[1rem] leading-normal text-start pl-10">
              Product
            </th>
            <th className="font-normal text-[1rem] leading-normal text-center">
              Price
            </th>
            <th className="font-normal text-[1rem] leading-normal text-center">
              Quantity
            </th>
            <th className="font-normal text-[1rem] leading-normal text-center">
              Reduction
            </th>
            <th className="font-normal text-[1rem] leading-normal text-end pr-10">
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="block w-full h-[40px]"></tr>
        </tbody>
        <tbody className="w-full gap-[40px]">
          {data?.itemList.map((item, index) => (
            <React.Fragment key={`${index}-${item.addedDate}`}>
              <tr className="w-full h-[72px] rounded-[4px] shadow-md border">
                <td className="flex items-center gap-[20px] font-normal text-[1rem] leading-normal text-start pl-10">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-[54px] h-[54px] object-cover"
                  />
                  <h5 className="text-[1rem] leading-normal line-clamp-1">
                    {item.title}
                  </h5>
                </td>
                <td className="font-normal text-[1rem] leading-normal text-center">
                  ${item.price}
                </td>
                <td className="font-normal text-[1rem] leading-normal text-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={() => {}}
                    className="w-[50px] border outline-none text-center rounded-md"
                  />
                </td>
                <td className="font-normal text-[1rem] leading-normal text-center">
                  {item.discountPercentage}%
                </td>
                <td className="font-normal text-[1rem] leading-normal text-end pr-10">
                  {Math.round(
                    (item.price * (100 - item.discountPercentage)) / 100
                  )}
                </td>
              </tr>
              {index < data.itemList.length - 1 ? (
                <tr className="block w-full h-[40px]"></tr>
              ) : null}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <ul className="block md:hidden">
        {data?.itemList.map((item, index) => (
          <li
            key={`${index}-${item.title}`}
            className="flex items-start p-[10px] rounded-[4px] shadow-md border mb-[16px]"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-[100px] h-[100px] object-cover bg-[#F5F5F5] rounded-[4px]"
            />
            <div className="grow ml-[10px] flex flex-col">
              <h3 className="font-normal text-[1rem] leading-normal line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center mt-[10px]">
                <h4 className="font-medium text-[0.875rem] leading-normal line-clamp-1 opacity-50">
                  Quantity:
                </h4>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={() => {}}
                  className="ml-[8px] w-[50px] border outline-none text-center rounded-md"
                />
              </div>
              <div className="flex mt-[10px] justify-end gap-[10px]">
                <h4 className="text-[1rem] leading-normal line-through opacity-50">
                  ${item.price}
                </h4>
                <h4 className="mr-[10px] text-[1rem] leading-normal text-second-red font-semibold">
                  $
                  {Math.round(
                    (item.price * (100 - item.discountPercentage)) / 100
                  )}
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-[24px] flex flex-wrap gap-[10px] justify-end md:justify-between">
        <span className="hidden md:block">
          <Button
            href="/home"
            type="primary"
            style={{
              padding: "16px 48px",
              border: "1px solid #7F7F7F",
              height: "56px",
              background: "#FFFFFF",
              color: "#000000",
            }}
          >
            Return To Shop
          </Button>
        </span>
        <Button
          type="primary"
          style={{
            padding: "16px 48px",
            border: "1px solid #7F7F7F",
            height: "56px",
            background: "#FFFFFF",
            color: "#000000",
          }}
        >
          Update Cart
        </Button>
      </div>
      <div className="mt-[40px] lg:mt-[80px] flex flex-wrap justify-between mb-[140px] gap-[40px]">
        <div className="grow lg:grow-0 flex flex-col md:flex-row items-start">
          <Input
            placeholder="Coupon Code"
            style={{
              padding: "16px 48px",
              height: "56px",
            }}
          />
          <span className="hidden md:block">
            <Button
              type="primary"
              style={{
                marginLeft: "16px",
                padding: "16px 48px",
                height: "56px",
                color: "#FFFFFF",
              }}
            >
              Apply Coupon
            </Button>
          </span>
          <span className="block w-full md:hidden mt-[10px]">
            <Button
              type="primary"
              style={{
                width: "100%",
                padding: "16px 48px",
                height: "56px",
                color: "#FFFFFF",
              }}
            >
              Apply Coupon
            </Button>
          </span>
        </div>
        <div className="grow lg:grow-0 rounded-[4px] border border-black py-[32px] px-[24px] lg:min-w-[420px]">
          <h3 className="text-[1.25rem] leading-[1.75rem] font-medium">
            Cart Total
          </h3>
          <div className="flex mt-[24px] justify-between items-center pb-[16px] border-b border-[#999999]">
            <h5 className="text-[1rem] leading-normal">Subtotal:</h5>
            <h5 className="text-[1rem] leading-normal">
              $
              {data?.itemList.reduce((accumulator, item) => {
                return (
                  accumulator +
                  Math.round(
                    (item.price * (100 - item.discountPercentage)) / 100
                  )
                );
              }, 0)}
            </h5>
          </div>
          <div className="flex mt-[16px] justify-between items-center pb-[16px] border-b border-[#999999]">
            <h5 className="text-[1rem] leading-normal">Shipping:</h5>
            <h5 className="text-[1rem] leading-normal">Free</h5>
          </div>
          <div className="flex mt-[16px] justify-between items-center pb-[16px]">
            <h5 className="text-[1rem] leading-normal">Total:</h5>
            <h5 className="text-[1rem] leading-normal">
              $
              {data?.itemList.reduce((accumulator, item) => {
                return (
                  accumulator +
                  Math.round(
                    (item.price * (100 - item.discountPercentage)) / 100
                  )
                );
              }, 0)}
            </h5>
          </div>
          <div className="flex justify-center mt-[16px]">
            <Button
              type="primary"
              style={{
                padding: "16px 48px",
                height: "56px",
                color: "#FFFFFF",
              }}
            >
              Procees to checkout
            </Button>
          </div>
        </div>
      </div>
    </> //TODO: add loading animation
  );
}
