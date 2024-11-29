import { Link } from "react-router-dom";

import { AppFeatures } from "@/components";

import { SaleBanner } from "./components";
import { FlashSale } from "./containers";

export default function HomePage() {
  const list = [
    "Woman's Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <>
      <div className="flex lg:gap-[45px]  mb-20 md:mb-32 lg:mb-[140px]">
        <ul className="basis-1/5 flex-col pt-10 pr-4 gap-4 hidden lg:flex items-start border-r border-[#ccc]">
          {list.map((item, index) => (
            <li
              key={index}
              className="text-[1rem] leading-normal hover:text-button-hover-red"
            >
              <Link to="">{item}</Link>
            </li>
          ))}
        </ul>
        <SaleBanner />
      </div>
      <FlashSale />
      <div className="mb-[140px]">
        <AppFeatures />
      </div>
    </>
  );
}
