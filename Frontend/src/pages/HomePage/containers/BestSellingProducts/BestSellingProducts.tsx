import { Button, Spin } from "antd";

import { ProductCard } from "@/components";

import useHandler from "./controller";

export default function BestSellingProducts() {
  const { data, isLoading } = useHandler();

  return (
    <div>
      <div className="flex items-center md:mb-6">
        <div className="w-4 h-7 md:w-5 md:h-10 rounded-[4px] bg-second-red"></div>
        <h4 className="ml-4 text-[1rem] leading-[1.25rem] font-medium text-second-red">
          This Month
        </h4>
      </div>
      <div className="block md:flex justify-between">
        <h2 className="text-[1.25rem] md:text-[2.25rem] md:leading-[3rem] font-medium">
          Best Selling Products
        </h2>
        <div className="hidden md:flex gap-2 justify-end mt-4 md:mt-0">
          <Button
            type="primary"
            style={{ height: "56px", padding: "10px 48px" }}
          >
            View All
          </Button>
        </div>
      </div>
      <div className="relative min-h-[430px] md:min-h-[350px] mt-4 md:mt-10 md:mb-[140px] flex justify-between flex-wrap gap-y-2 md:gap-y-7">
        {data?.products.map((item) => (
          <ProductCard key={item.images[0]} data={item} />
        ))}

        {isLoading ? (
          <div className="bg-white bg-opacity-30 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <Spin size="large" />
          </div>
        ) : null}
      </div>

      <div className="flex md:hidden mt-[30px] md:mt-[60px] mb-[70px] md:mb-[140px] justify-center">
        <Button type="primary" style={{ height: "56px", padding: "10px 48px" }}>
          View All
        </Button>
      </div>
    </div>
  );
}
