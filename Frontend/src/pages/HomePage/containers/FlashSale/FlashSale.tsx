import { Button, Spin, Divider } from "antd";

import { ArrowLeft, ArrowRight } from "@/assets/svg";
import { ProductCard } from "@/components";
import { TimeCounter } from "../../components";

import useHandler from "./controller";

export default function FlashSale() {
  const { data, isLoading, onNextPageClick, onPreviousPageClick } =
    useHandler();

  return (
    <div>
      <div className="flex items-center md:mb-6">
        <div className="w-4 h-7 md:w-5 md:h-10 rounded-[4px] bg-second-red"></div>
        <h4 className="ml-4 text-[1rem] leading-[1.25rem] font-medium text-second-red">
          Today's
        </h4>
      </div>
      <div className="block md:flex justify-between">
        <div className="flex gap-[30px] md:gap-[87px] items-center justify-between md:justify-normal">
          <h2 className="text-[1.25rem] md:text-[2.25rem] md:leading-[3rem] font-medium">
            Flash Sales
          </h2>
          <TimeCounter />
        </div>
        <div className="flex gap-2 justify-end mt-4 md:mt-0">
          <button
            onClick={onPreviousPageClick}
            className="w-[46px] h-[46px] rounded-full flex items-center justify-center bg-second-gray hover:text-second-red hover:-translate-y-[2px] transition-all"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={onNextPageClick}
            className="w-[46px] h-[46px] rounded-full flex items-center justify-center bg-second-gray hover:text-second-red hover:-translate-y-[2px] transition-all"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="relative mt-4 md:mt-10 flex justify-between flex-wrap gap-y-2 md:gap-y-7">
        {data?.products.map((item) => (
          <ProductCard key={item.images[0]} data={item} />
        ))}

        {isLoading ? (
          <div className="bg-white bg-opacity-30 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <Spin size="large" />
          </div>
        ) : null}
      </div>

      <div className="flex my-[60px] justify-center">
        {/* //TODO: Create a view all products endpoint */}
        <Button type="primary" style={{ height: "56px", padding: "10px 48px" }}>
          View All Products
        </Button>
      </div>
      <Divider />
    </div>
  );
}
