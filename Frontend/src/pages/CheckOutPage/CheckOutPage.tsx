import { Breadcrumb, Button, Form, Input, Spin } from "antd";

import { Bkash, Mastercard, Nagad, Visa } from "@/assets/images";

import useHandler from "./controller";
import { ICheckoutItem } from "./interfaces";

export default function CheckOutPage() {
  const { form, data, isLoading, onFinish } = useHandler();

  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: <a href="/cart">Cart</a>,
            },
            {
              title: "CheckOut",
            },
          ]}
        />
      </div>

      <h3 className="text-[2.25rem] leading-[1.875rem] font-medium mb-[48px]">
        Billing Details
      </h3>
      <div className="flex flex-col lg:flex-row justify-between gap-x-[10%] gap-y-[80px] mb-[140px]">
        <div className="grow flex flex-col">
          <Form
            name="customer-form"
            layout="vertical"
            variant="filled"
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Street Address"
              name="address"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Apartment, floor, etc. (optional)"
              name="optionalAddress"
              rules={[{ required: false }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Town/City"
              name="city"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              />
            </Form.Item>
            <div className="flex justify-start">
              <input
                type="checkbox"
                className="accent-second-red w-[24px] h-[24px] mr-[16px]"
              />
              <h5 className="text-[1rem] leading-normal">
                Save this information for faster check-out next time
              </h5>
            </div>
          </Form>
        </div>
        <div className="grow flex flex-col">
          <ul className="flex w-full flex-col gap-[32px] lg:max-h-[300px] lg:overflow-auto mb-[32px] pt-2">
            {data
              ? data.map((item: ICheckoutItem) => (
                  <li
                    key={`${item.id}-${item.title}`}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-[80px] h-[80px] lg:w-[54px] lg:h-[54px] object-cover"
                        />
                        <h5 className="text-second-red absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                          x {item.quantity}
                        </h5>
                      </div>
                      <h4 className="text-[1rem] leading-normal ml-[24px] line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                    <h4 className="text-[1rem] leading-normal ml-[24px]">
                      $
                      {Math.round(
                        (item.price * (100 - item.discountPercentage)) / 100
                      )}
                    </h4>
                  </li>
                ))
              : null}
          </ul>
          <div className="flex w-full justify-between items-center pb-[16px] border-b border-black mb-[16px]">
            <h4 className="text-[1rem] leading-normal">Subtotal:</h4>
            <h4 className="text-[1rem] leading-normal">
              $
              {data?.reduce((accumulator: number, item: ICheckoutItem) => {
                return (
                  accumulator +
                  Math.round(
                    (item.price * (100 - item.discountPercentage)) / 100
                  ) *
                    item.quantity
                );
              }, 0) ?? 0}
            </h4>
          </div>
          <div className="flex w-full justify-between items-center pb-[16px] border-b border-black mb-[16px]">
            <h4 className="text-[1rem] leading-normal">Shipping:</h4>
            <h4 className="text-[1rem] leading-normal">Free</h4>
          </div>
          <div className="flex w-full justify-between items-center mb-[32px]">
            <h4 className="text-[1rem] leading-normal">Total:</h4>
            <h4 className="text-[1rem] leading-normal">
              $
              {data?.reduce((accumulator: number, item: ICheckoutItem) => {
                return (
                  accumulator +
                  Math.round(
                    (item.price * (100 - item.discountPercentage)) / 100
                  ) *
                    item.quantity
                );
              }, 0) ?? 0}
            </h4>
          </div>
          <div className="flex flex-col gap-[32px] mb-[32px]">
            <div className="flex justify-between items-center">
              <div className="flex">
                <input
                  name="paymentMethod"
                  type="radio"
                  defaultChecked
                  className="w-[24px] h-[24px] accent-black mr-[16px]"
                />
                <h4 className="text-[1rem] leading-normal">Bank</h4>
              </div>

              <div className="flex gap-[4px]">
                <img src={Bkash} alt="Bkash" />
                <img src={Visa} alt="Visa" />
                <img src={Mastercard} alt="Mastercard" />
                <img src={Nagad} alt="Nagad" />
              </div>
            </div>
            <div className="flex">
              <input
                name="paymentMethod"
                type="radio"
                className="w-[24px] h-[24px] accent-black mr-[16px]"
              />
              <h4 className="text-[1rem] leading-normal">Cash on delivery</h4>
            </div>
          </div>
          <div className="grow lg:grow-0 flex flex-col md:flex-row items-start mb-[32px]">
            <Input
              placeholder="Coupon Code"
              style={{
                padding: "16px ",
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
          <div className="grow lg:grow-0 flex flex-col md:flex-row items-start">
            <span className="hidden md:block">
              <Button
                type="primary"
                htmlType="submit"
                form="customer-form"
                style={{
                  padding: "16px 48px",
                  height: "56px",
                  color: "#FFFFFF",
                }}
              >
                Place Order
              </Button>
            </span>
            <span className="block w-full md:hidden">
              <Button
                type="primary"
                htmlType="submit"
                form="receiver-form"
                style={{
                  width: "100%",
                  padding: "16px 48px",
                  height: "56px",
                  color: "#FFFFFF",
                }}
              >
                Place Order
              </Button>
            </span>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="flex flex-col gap-4 fixed top-0 bottom-0 left-0 right-0 justify-center items-center bg-white z-10">
          <Spin size="large" />
          <h3 className="text-[1.25rem] font-normal">Loading...</h3>
        </div>
      )}
    </>
  );
}
