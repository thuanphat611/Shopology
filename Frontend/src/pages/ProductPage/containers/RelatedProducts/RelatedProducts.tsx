import { Spin } from "antd";

import { ProductCard } from "@/components";

import useHandler from "./controller";

export default function RelatedProducts({ category }: { category: string }) {
  const { data, isLoading } = useHandler(category);

  return (
    <div>
      <div className="block md:flex justify-between">
        <div className="flex items-center md:mb-6">
          <div className="w-4 h-7 md:w-5 md:h-10 rounded-[4px] bg-second-red"></div>
          <h4 className="ml-4 text-[1rem] leading-[1.25rem] font-medium text-second-red">
            Related Item
          </h4>
        </div>
      </div>
      <div className="relative min-h-[430px] md:min-h-[350px] mt-4 md:mt-10 md:mb-[140px] flex justify-between flex-wrap gap-y-2 md:gap-y-7">
        {data?.products.map((item, index) => {
          if (index < 4) {
            return <ProductCard key={item.images[0]} data={item} />;
          } else {
            return null;
          }
        })}

        {isLoading ? (
          <div className="bg-white bg-opacity-30 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <Spin size="large" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
