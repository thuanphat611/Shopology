import { Breadcrumb } from "antd";

import { StorySideImage } from "@/assets/images";
import { Coin, MoneyBag, Shop, ShoppingBag } from "@/assets/svg";

import { TeamSlider } from "./components";

export default function AboutPage() {
  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "About",
            },
          ]}
        />
      </div>
      <div className="w-ful flex-col-reverse md:flex-row flex gap-x-[30px] gap-y-[10px] -mt-[38px] mb-[140px]">
        <div className="w-full flex gap-x-[75px]">
          <div className="flex flex-col justify-center grow basis-1/2 h-full">
            <h1 className="text-[54px] font-medium leading-[64px] mb-10">
              Our Story
            </h1>
            <p className="text-[16px] leading-[26px] mb-6">
              Launced in 2015, Shopology is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Shopology has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-[16px] leading-[26px] mb-6">
              Shopology has more than 1 Million products to offer, growing at a
              very fast. Shopology offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="basis-1/2 hidden lg:block">
            <img
              src={StorySideImage}
              alt="about"
              className="w-full h-auto rounded-[4px]"
            />
          </div>
        </div>
      </div>
      <div className="mb-[140px] flex gap-[30px] flex-wrap justify-center">
        <div className="h-[230px] w-[270px] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.3)] flex-col flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#C3C3C4] flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
              <Shop />
            </div>
          </div>
          <h3 className="text-[32px] font-semibold leading-[30px] mt-6">
            10.5k
          </h3>
          <p className="text-[16px] mt-3">Sallers active our site</p>
        </div>
        <div className="h-[230px] w-[270px] rounded-[4px] shadow-lg bg-second-red flex-col flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[rgba(255,255,255,0.3)] flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-white flex items-center justify-center">
              <Coin />
            </div>
          </div>
          <h3 className="text-text-white text-[32px] font-semibold leading-[30px] mt-6">
            33k
          </h3>
          <p className="text-text-white text-[16px] mt-3">
            Monthly Product Sale
          </p>
        </div>
        <div className="h-[230px] w-[270px] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.3)] flex-col flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#C3C3C4] flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
              <ShoppingBag />
            </div>
          </div>
          <h3 className="text-[32px] font-semibold leading-[30px] mt-6">
            45.5k
          </h3>
          <p className="text-[16px] mt-3">Customer active in our site</p>
        </div>
        <div className="h-[230px] w-[270px] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.3)] flex-col flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#C3C3C4] flex items-center justify-center">
            <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
              <MoneyBag />
            </div>
          </div>
          <h3 className="text-[32px] font-semibold leading-[30px] mt-6">25k</h3>
          <p className="text-[16px] mt-3">Anual gross sale in our site</p>
        </div>
      </div>
      <TeamSlider />
    </>
  );
}
