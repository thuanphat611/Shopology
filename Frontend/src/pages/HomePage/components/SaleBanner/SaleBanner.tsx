import { Link } from "react-router-dom";

import { ArrowRight } from "@/assets/svg";

import useHandler from "./controller";

export default function SaleBanner() {
  const { bannerList, transitioning, currentBanner, onChangeBanner } =
    useHandler();

  return (
    <div className="basis-4/5 grow pt-5 md:pt-10 flex justify-end">
      <div className="h-full w-full min-h-[170px] md:min-h-[344px] bg-black relative overflow-hidden">
        <span
          className={`banner-content ${transitioning ? "fade-out" : "fade-in"}`}
        >
          <div className="w-2/5 absolute left-7 bottom-5 md:left-16 md:bottom-11 z-10">
            <div className="flex items-center text-[16px] leading-normal">
              <div className="hidden md:flex h-10 w-auto items-center justify-center">
                {bannerList[currentBanner].brandLogo}
              </div>
              <h4 className="text-white ml-1 md:ml-2 lg:ml-3">
                {bannerList[currentBanner].name}
              </h4>
            </div>
            <h2 className="text-white text-[20px] mt-1 md:mt-5 md:text-[48px] leading-normal md:leading-[60px]">
              {bannerList[currentBanner].text}
            </h2>
            <Link
              to=""
              className="flex mt-[10px] md:mt-[22px] text-white hover:text-button-hover-red"
            >
              <h5 className="text-[14px] md:text-[16px] mr-2 leading-normal underline underline-offset-[6px]">
                Shop now
              </h5>
              <ArrowRight />
            </Link>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4/5 md:w-2/5 h-4/5 flex pr-3 md:pr-0 justify-end md:justify-center items-center">
            <img
              src={bannerList[currentBanner].image}
              alt={bannerList[currentBanner].name}
              className="w-auto h-full"
            />
          </div>
        </span>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {bannerList.map((item, index) => {
            if (index === currentBanner) {
              return (
                <button
                  key={item.id}
                  className="w-3 h-3 rounded-full bg-second-red outline-none border-[2px] border-white"
                ></button>
              );
            } else {
              return (
                <button
                  key={item.id}
                  onClick={() => onChangeBanner(index)}
                  className="w-3 h-3 rounded-full bg-[#808080] hover:cursor-pointer outline-none"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
