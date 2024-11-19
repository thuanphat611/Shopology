import { Delivery, Headphone, Secure } from "@/assets/svg";

export default function AppFeatures() {
  return (
    <div className="flex flex-col md:flex-row gap-[30px] justify-center">
      <div className="grow basis-1/3 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#C3C3C4] flex items-center justify-center">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
            <Delivery />
          </div>
        </div>
        <h3 className="text-[20px] font-semibold leading-[28px] mt-6 text-center">
          FREE AND FAST DELIVERY
        </h3>
        <p className="text-[14px] mt-3 text-center">
          Free delivery for all orders over $140
        </p>
      </div>

      <div className="grow basis-1/3 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#C3C3C4] flex items-center justify-center">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
            <Headphone />
          </div>
        </div>
        <h3 className="text-[20px] font-semibold leading-[28px] mt-6 text-center">
          24/7 CUSTOMER SERVICE
        </h3>
        <p className="text-[14px] mt-3 text-center">
          Friendly 24/7 customer support
        </p>
      </div>

      <div className="grow basis-1/3 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-[#C3C3C4] flex items-center justify-center">
          <div className="w-[58px] h-[58px] rounded-full bg-black flex items-center justify-center">
            <Secure />
          </div>
        </div>
        <h3 className="text-[20px] font-semibold leading-[28px] mt-6 text-center">
          MONEY BACK GUARANTEE
        </h3>
        <p className="text-[14px] mt-3 text-center">
          We reurn money within 30 days
        </p>
      </div>
    </div>
  );
}
