import { Link } from "react-router-dom";

import { Perfume, PlayStation, Speakers, Woman } from "@/assets/images";

export default function NewArrival() {
  return (
    <div>
      <div className="flex items-center md:mb-6">
        <div className="w-4 h-7 md:w-5 md:h-10 rounded-[4px] bg-second-red"></div>
        <h4 className="ml-4 text-[1rem] leading-[1.25rem] font-medium text-second-red">
          Featured
        </h4>
      </div>
      <div className="block md:flex justify-between">
        <h2 className="text-[1.25rem] md:text-[2.25rem] md:leading-[3rem] font-medium">
          New Arrival
        </h2>
      </div>
      <div className="mt-4 md:mt-10 flex gap-y-[10px] gap-x-[30px] flex-col md:flex-row mb-[70px] md:mb-[140px]">
        <div className="relative grow md-[10px] bg-[#0D0D0D] flex justify-center items-end">
          <img src={PlayStation} alt="new arrival" className="w-4/5 h-auto" />
          <div className="w-1/2 absolute bottom-4 left-4 md:bottom-8 md:left-8">
            <h4 className="text-white text-[1rem] leading-[1rem] md:text-[1.5rem] md:leading-[1.5rem] font-medium mb-4">
              PlayStation 5
            </h4>
            <p className="text-white text-[0.75rem] leading-normal md:text-[0.875rem] md:leading-[1.3125rem]">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              to=""
              className="underline text-white text-[1rem] leading-normal underline-offset-[5px] mt-4 hidden md:block hover:text-button-hover-red hover:decoration-button-hover-red"
            >
              Shop Now
            </Link>
          </div>
          <Link
            to=""
            className="block md:hidden absolute top-0 bottom-0 left-0 right-0"
          ></Link>
        </div>
        <div className="grow flex flex-col gap-y-[10px] md:gap-y-[30px]">
          <div className="relative grow bg-[#0D0D0D] flex justify-end items-end">
            <img src={Woman} alt="new arrival" className="h-4/5 w-auto" />
            <div className="w-1/2 absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <h4 className="text-white text-[1rem] leading-[1rem] md:text-[1.5rem] md:leading-[1.5rem] font-medium mb-4">
                Women’s Collections
              </h4>
              <p className="text-white text-[0.75rem] leading-normal md:text-[0.875rem] md:leading-[1.3125rem]">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                to=""
                className="underline text-white text-[1rem] leading-normal underline-offset-[5px] mt-4 hidden md:block hover:text-button-hover-red hover:decoration-button-hover-red"
              >
                Shop Now
              </Link>
            </div>
            <Link
              to=""
              className="block md:hidden absolute top-0 bottom-0 left-0 right-0"
            ></Link>
          </div>
          <div className="grow flex gap-x-[10px] md:gap-x-[30px]">
            <div className="relative grow bg-[#0D0D0D] flex justify-center items-center">
              <div className="absolute top-0 bottom-0 left-0 right-0 rounded-full bg-[#D9D9D9] opacity-20 blur-[50px] z-0"></div>
              <img
                src={Speakers}
                alt="new arrival"
                className="h-4/5 w-auto z-[1]"
              />
              <div className="w-[90%] absolute bottom-4 left-4 md:bottom-8 md:left-8 z-[2]">
                <h4 className="text-white text-[1rem] leading-[1rem] md:text-[1.5rem] md:leading-[1.5rem] font-medium mb-4">
                  Speakers
                </h4>
                <p className="text-white text-[0.75rem] leading-normal md:text-[0.875rem] md:leading-[1.3125rem]">
                  Amazon wireless speakers
                </p>
                <Link
                  to=""
                  className="underline text-white text-[1rem] leading-normal underline-offset-[5px] mt-4 hidden md:block hover:text-button-hover-red hover:decoration-button-hover-red"
                >
                  Shop Now
                </Link>
              </div>
              <Link
                to=""
                className="block md:hidden absolute top-0 bottom-0 left-0 right-0 z-[3]"
              ></Link>
            </div>
            <div className="relative grow bg-[#0D0D0D] flex justify-center items-center">
              <div className="absolute top-0 bottom-0 left-0 right-0 rounded-full bg-[#D9D9D9] opacity-20 blur-[50px] z-0"></div>
              <img
                src={Perfume}
                alt="new arrival"
                className="h-4/5 w-auto z-[1]"
              />
              <div className="w-[90%] absolute bottom-4 left-4 md:bottom-8 md:left-8 z-[2]">
                <h4 className="text-white text-[1rem] leading-[1rem] md:text-[1.5rem] md:leading-[1.5rem] font-medium mb-4">
                  Perfume
                </h4>
                <p className="text-white text-[0.75rem] leading-normal md:text-[0.875rem] md:leading-[1.3125rem]">
                  GUCCI INTENSE OUD EDP
                </p>
                <Link
                  to=""
                  className="underline text-white text-[1rem] leading-normal underline-offset-[5px] mt-4 hidden md:block hover:text-button-hover-red hover:decoration-button-hover-red"
                >
                  Shop Now
                </Link>
              </div>
              <Link
                to=""
                className="block md:hidden absolute top-0 bottom-0 left-0 right-0 z-[3]"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
