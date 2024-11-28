import { Rate } from "antd";

import { Eye, Heart } from "@/assets/svg";

export default function ProductCard() {
  const imgSrc =
    "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png";
  const name = "Product name";
  const discountPercentage = 40;
  const price = 211;
  const rating = 4.5;
  const ratingCount = 88;

  return (
    <div className="w-[270px] flex flex-col items-start ">
      <div className="group relative rounded-[4px] overflow-hidden">
        <img
          src={imgSrc}
          alt=""
          className="bg-second-gray w-full h-[250px] bg-center"
        />
        {discountPercentage > 0 ? (
          <div className="absolute top-3 left-3 bg-second-red px-3 py-1 rounded-[4px]">
            <h5 className="text-white text-[12px]">-{discountPercentage}%</h5>
          </div>
        ) : null}
        <div className="absolute top-3 right-3">
          <button className="bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center hover:text-second-red">
            <Heart />
          </button>
          <button className="mt-2 bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center hover:text-second-red">
            <Eye />
          </button>
        </div>
        <button className="hidden group-hover:block absolute bottom-0 left-0 right-0 bg-black outline-none hover:bg-primary-black text-white text-[16px] p-2">
          Add To Cart
        </button>
      </div>
      <h3 className="mt-4 text-[16px] text-wrap line-clamp-2">{name}</h3>
      <div className="mt-2 flex">
        <h4 className="text-[16px] text-second-red">
          ${Math.round((price * (100 - discountPercentage)) / 100)}
        </h4>
        {(discountPercentage * price) / 100 ? (
          <h4 className="ml-3 text-[16px] text-black opacity-50 line-through decoration-1">
            ${price}
          </h4>
        ) : null}
      </div>
      <div className="mt-2 flex">
        <Rate disabled allowHalf defaultValue={rating} />
        <h4 className="ml-2 text-[14px] font-medium text-black opacity-50">
          ({ratingCount})
        </h4>
      </div>
    </div>
  );
}
