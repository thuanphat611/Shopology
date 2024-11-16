import useHandler from "./controller";

import { Instagram, Twitter, LinkedIn } from "@/assets/svg";

export default function TeamSlider() {
  const { page, numPerPage, peopleList, pageList, setPage } = useHandler();

  return (
    <div className="mb-[140px] hidden md:block">
      <div className="flex gap-[30px] justify-center">
        {peopleList.map((item, index) => {
          if (index < (page + 1) * numPerPage && index >= page * numPerPage)
            return (
              <div key={`${index}-${item.name}-${item.role}`} className="basis-1/3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full rounded-[4px] mb-8"
                />
                <h4 className="text-[32px] leading-[30px]">{item.name}</h4>
                <h5 className="text-[16px] mb-4">{item.role}</h5>
                <div className="flex gap-x-4">
                  <a href="" className="text-black hover:text-second-red">
                    <Twitter />
                  </a>
                  <a href="" className="text-black hover:text-second-red">
                    <Instagram />
                  </a>
                  <a href="" className="text-black hover:text-second-red">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            );
          else return null;
        })}
      </div>
      <div className="flex gap-x-3 justify-center mt-10">
        {pageList.map((item) => {
          if (item.pageIndex !== page)
            return (
              <button
                key={`peopleList-page-${item.pageIndex}`}
                onClick={() => {
                  setPage(item.pageIndex);
                }}
                className="p-[2px] bg-[rgba(0,0,0,0.3)] rounded-full hover:cursor-pointer flex items-center justify-center"
              >
                <div className="w-[8px] h-[8px] rounded-full"></div>
              </button>
            );
          else
            return (
              <button
                key={`peopleList-page-${item.pageIndex}`}
                className="border-[2px] border-[rgba(0,0,0,0.3)] rounded-full hover:cursor-default flex items-center justify-center"
              >
                <div className="w-[8px] h-[8px] border-[1px] border-white bg-second-red rounded-full"></div>
              </button>
            );
        })}
      </div>
    </div>
  );
}
