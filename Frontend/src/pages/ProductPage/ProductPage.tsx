import { Breadcrumb, Button, Rate, Spin } from "antd";
import { Link } from "react-router-dom";

import { Cart, Delivery, Heart, Return } from "@/assets/svg";

import useHandler from "./controller";

export default function ProductPage() {
  const {
    data,
    thumbnail,
    isLoading,
    quantity,
    onDecreaseQuantity,
    onIncreaseQuantity,
    onThumbnailChange,
  } = useHandler();

  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "Product",
            },
          ]}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[70px] mb-[140px]">
        <div className="grow flex flex-col-reverse lg:flex-row gap-[30px]">
          <div className="basis-1/4 shrink-0 flex lg:flex-col overflow-auto gap-[16px]">
            {data && data.images.length > 0
              ? data?.images.map((image, index) => (
                  <button
                    key={`${data.id}-${data.title}-${index}`}
                    onClick={() => onThumbnailChange(index)}
                    className="basis-1/3 lg:basis-0 lg:w-full border-none outline-none bg-second-gray rounded-[4px] flex items-center justify-center"
                  >
                    <img
                      src={image}
                      alt="Display images"
                      className=" h-auto w-full"
                    />
                  </button>
                ))
              : null}
          </div>
          <div className="grow bg-second-gray rounded-[4px]">
            <img src={thumbnail} alt="Thumbnail" className="w-full h-auto" />
          </div>
        </div>

        <div className="shrink-0 basis-1/3 flex flex-col">
          <h3 className="text-[1.5rem] leading-[1.5rem] font-semibold mb-[16px]">
            {data?.title}
          </h3>
          <div className="flex gap-[16px] items-center mb-[16px]">
            <Rate disabled allowHalf value={data?.rating ?? 0} />
            <p className="text-[1.5rem] leading-[1.5rem] opacity-50">|</p>
            <h5 className="text-[1rem] leading-normal">
              In Stock: {data?.stock}
            </h5>
          </div>
          <h3 className="text-[1.5rem] leading-[1.5rem] mb-[24px]">
            $
            {data
              ? Math.round((data.price * (100 - data.discountPercentage)) / 100)
              : 0}
          </h3>
          <p className="text-[0.875rem] leading-normal mb-[24px]">
            {data?.description}
          </p>
          <div className="w-full h-[1px] bg-black mb-[24px] opacity-50"></div>
          <div className="flex flex-col md:flex-row gap-[20px] mb-[40px] justify-center lg:justify-between">
            <div className="flex mx-[50px] sm:mx-[100px] md:mx-0 overflow-hidden rounded-[4px] h-full">
              <button
                onClick={onDecreaseQuantity}
                className="text-[2rem] leading-[2rem] font-light hover:cursor-pointer hover:bg-gray-100 bg-white flex items-center justify-center rounded-tl-[4px] rounded-bl-[4px] border-[1px] border-black w-[40px]"
              >
                -
              </button>
              <div className="grow min-w-[50px] h-[44px] flex justify-center items-center border-t-[1px] border-b-[1px] border-black">
                {quantity}
              </div>
              <button
                onClick={onIncreaseQuantity}
                className="text-[2rem] leading-[2rem] font-light hover:cursor-pointer hover:bg-button-hover-red bg-second-red text-white flex items-center justify-center rounded-tr-[4px] rounded-br-[4px] border-[1px] border-second-red w-[40px]"
              >
                +
              </button>
            </div>
            <div className="flex items-center gap-[20px]">
              <Button
                type="primary"
                style={{
                  flexGrow: "1",
                  padding: "16px 48px",
                  height: "44px",
                  color: "#FFFFFF",
                }}
              >
                Buy now
              </Button>
              <Button
                type="primary"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #000000",
                  padding: "0",
                  height: "44px",
                  minWidth: "44px",
                  color: "#000000",
                }}
              >
                <Heart />
              </Button>
              <Button
                type="primary"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #000000",
                  padding: "0",
                  height: "44px",
                  minWidth: "44px",
                  color: "#000000",
                }}
              >
                <Cart />
              </Button>
            </div>
          </div>
          <div className="border border-black rounded-[4px] overflow-hidden">
            <div className="text-black p-[16px] pt-[24px] flex border-b border-black">
              <Delivery />
              <div className="ml-[16px]">
                <h4 className="text-[1rem] font-medium mb-[8px]">
                  Shipping Information
                </h4>
                <p className="text-[0.75rem] font-medium">
                  {data?.shippingInformation}
                </p>
              </div>
            </div>
            <div className="text-black p-[16px] pt-[24px] flex">
              <Return />
              <div className="ml-[16px]">
                <h4 className="text-[1rem] font-medium mb-[8px]">
                  Return Policy
                </h4>
                <p className="text-[0.75rem] font-medium">
                  {data?.returnPolicy}
                  {" ."}
                  <Link to="" className="underline">
                    Details
                  </Link>
                </p>
              </div>
            </div>
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
