import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AcerLogo, AppleLogo, NikeLogo, NintendoLogo } from "@/assets/svg";
import {
  SaleBanner1,
  SaleBanner2,
  SaleBanner3,
  SaleBanner4,
} from "@/assets/images";

const bannerList = [
  {
    id: uuidv4(),
    name: "iphone 14 Series",
    text: "Up to 10% off voucher",
    brandLogo: <AppleLogo />,
    image: SaleBanner1,
  },
  {
    id: uuidv4(),
    name: "Nike Super Sale",
    text: "Up to 60% off on selected items",
    brandLogo: <NikeLogo />,
    image: SaleBanner2,
  },
  {
    id: uuidv4(),
    name: "Acer Laptop Sale",
    text: "Biggest Sale of the year",
    brandLogo: <AcerLogo />,
    image: SaleBanner3,
  },
  {
    id: uuidv4(),
    name: "Nintendo Member Sale",
    text: "Up to 50% off for members",
    brandLogo: <NintendoLogo />,
    image: SaleBanner4,
  },
];

export default function useHandler() {
  const [currentBanner, setCurrentBanner] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const autoRunDelay = 5000;
  const transitionTime = 150;

  useEffect(() => {
    const autoRun = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentBanner((index) => {
          if (index < bannerList.length - 1) return index + 1;
          else return 0;
        });
        setTransitioning(false);
      }, transitionTime);
    }, autoRunDelay);

    return () => clearInterval(autoRun);
  }, []);

  function handleChangeBanner(index: number) {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentBanner(index);
      setTransitioning(false);
    }, transitionTime);
  }

  return {
    bannerList,
    transitioning,
    currentBanner,
    onChangeBanner: handleChangeBanner,
  };
}
