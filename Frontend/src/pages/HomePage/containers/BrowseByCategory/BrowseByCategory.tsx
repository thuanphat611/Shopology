import { Divider } from "antd";
import { Link } from "react-router-dom";

import { ArrowLeft, ArrowRight } from "@/assets/svg";

import useHandler from "./controller";

export default function BrowseByCategory() {
  const { categoryList } = useHandler();

  return (
    <div>
      <div className="flex items-center md:mb-6">
        <div className="w-4 h-7 md:w-5 md:h-10 rounded-[4px] bg-second-red"></div>
        <h4 className="ml-4 text-[1rem] leading-[1.25rem] font-medium text-second-red">
          Categories
        </h4>
      </div>
      <div className="block md:flex justify-between">
        <h2 className="text-[1.25rem] md:text-[2.25rem] md:leading-[3rem] font-medium">
          Browse By Category
        </h2>
        <div className="flex gap-2 justify-end mt-4 md:mt-0">
          <button className="w-[46px] h-[46px] rounded-full flex items-center justify-center bg-second-gray hover:text-second-red hover:-translate-y-[2px] transition-all">
            <ArrowLeft />
          </button>
          <button className="w-[46px] h-[46px] rounded-full flex items-center justify-center bg-second-gray hover:text-second-red hover:-translate-y-[2px] transition-all">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="mt-4 md:mt-10 flex justify-between flex-wrap gap-y-2 sm:gap-y-[15px] md:gap-y-7">
        {categoryList.map((item, index) => (
          <Link
            key={`${index}-${item.name}`}
            to=""
            className="basis-[calc((100%-10px)/2)] sm:basis-[calc((100%-45px)/3)] md:basis-[calc((100%-150px)/6)] h-[120px] md:h-[145px] bg-white border border-[#ccc] rounded-[4px] flex items-center justify-center flex-col hover:bg-second-red hover:cursor-pointer hover:text-white transition-all"
          >
            {item.icon}
            <h3 className="text-[1rem] font-normal leading-normal text-center mt-4">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
      <div className="mt-[30px] md:mt-[60px] mb-[40px] md:mb-[80px]">
        <Divider />
      </div>
    </div>
  );
}
