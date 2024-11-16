import { useState } from "react";

import {
  Chairman,
  CustomerExpManager,
  ManagingDirector,
  PartnershipsManager,
  ProductDesigner,
} from "@/assets/images";

const peopleList = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: Chairman,
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: ManagingDirector,
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: ProductDesigner,
  },
  {
    name: "Robert Downey Jr",
    role: "Customer Experience Manager",
    image: CustomerExpManager,
  },
  {
    name: "LeBron James",
    role: "Partnerships Manager",
    image: PartnershipsManager,
  },
];

export default function useHandler() {
  const [page, setPage] = useState<number>(0);
  const numPerPage = 3;
  const pageList = [];

  for (let i = 0; i < Math.ceil(peopleList.length / numPerPage); i++)
    pageList.push({
      pageIndex: i,
    });

  return {
    page,
    setPage,
    peopleList,
    pageList,
    numPerPage,
  };
}
