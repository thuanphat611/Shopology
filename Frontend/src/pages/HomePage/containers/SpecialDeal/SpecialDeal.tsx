import { Link } from "react-router-dom";
import { Button } from "antd";

import { SpecialDeal as image } from "@/assets/images";

import useHandler from "./controller";

export default function SpecialDeal() {
  const { day, hour, minute, second } = useHandler();

  return (
    <div className="mb-[70px] bg-black flex py-[10px] px-[20px] md:py-[70px] md:px-[55px] relative">
      <div className="basis-1/2 flex flex-col justify-center items-start">
        <h5 className="text-button-green text-[1rem] leading-[1.25rem] font-medium mb-2 md:mb-8">
          Special Deal
        </h5>
        <h2 className="text-[1rem] text-white md:text-[3rem] md:leading-[3.75rem] mb-2 md:mb-8">
          Enhance Your Music Experience
        </h2>

        <div className="flex items-end gap-x-1 md:gap-x-6 mb-[20px] md:mb-[40px]">
          <div className="md:w-[62px] md:h-[62px] md:bg-white flex flex-col items-center justify-center rounded-full">
            <h2 className="text-white md:text-black text-center text-[0.75rem] leading-[1.25rem] md:text-[1rem] md:leading-[1.25rem] font-medium">
              {day < 10 ? "0" + day : day}
            </h2>
            <h6 className="text-white md:text-black text-center text-[0.375rem] leading-[0.375rem] md:text-[0.6875rem] md:leading-[1.125rem]">
              Days
            </h6>
          </div>
          <div className="md:w-[62px] md:h-[62px] md:bg-white flex flex-col items-center justify-center rounded-full">
            <h2 className="text-white md:text-black text-center text-[0.75rem] leading-[1.25rem] md:text-[1rem] md:leading-[1.25rem] font-medium">
              {hour < 10 ? "0" + hour : hour}
            </h2>
            <h6 className="text-white md:text-black text-center text-[0.375rem] leading-[0.375rem] md:text-[0.6875rem] md:leading-[1.125rem]">
              Hours
            </h6>
          </div>
          <div className="md:w-[62px] md:h-[62px] md:bg-white flex flex-col items-center justify-center rounded-full">
            <h2 className="text-white md:text-black text-center text-[0.75rem] leading-[1.25rem] md:text-[1rem] md:leading-[1.25rem] font-medium">
              {minute < 10 ? "0" + minute : minute}
            </h2>
            <h6 className="text-white md:text-black text-center text-[0.375rem] leading-[0.375rem] md:text-[0.6875rem] md:leading-[1.125rem]">
              Minutes
            </h6>
          </div>
          <div className="md:w-[62px] md:h-[62px] md:bg-white flex flex-col items-center justify-center rounded-full">
            <h2 className="text-white md:text-black text-center text-[0.75rem] leading-[1.25rem] md:text-[1rem] md:leading-[1.25rem] font-medium">
              {second < 10 ? "0" + second : second}
            </h2>
            <h6 className="text-white md:text-black text-center text-[0.375rem] leading-[0.375rem] md:text-[0.6875rem] md:leading-[1.125rem]">
              Seconds
            </h6>
          </div>
        </div>

        <span className="hidden md:block">
          <Button
            href=""
            type="primary"
            style={{
              padding: "16px 48px",
              height: "56px",
              background: "#00FF66",
              color: "#FFFFFF",
            }}
          >
            Buy Now
          </Button>
        </span>

        <Link
          to=""
          className="block md:hidden absolute top-0 bottom-0 left-0 right-0 z-[2]"
        />
      </div>
      <div className="basis-1/2 flex items-center justify-center relative">
        <div className="h-4/5 w-4/5 bg-[#D9D9D9] rounded-full opacity-30 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 blur-[20px] md:blur-[100px]"></div>
        <img src={image} alt="special deal" className="h-4/5 w-auto z-[1]" />
      </div>
    </div>
  );
}
