import { Rate } from "antd";
import { Link } from "react-router-dom";

import { Eye, Heart } from "@/assets/svg";
import { IProduct } from "@/common/interfaces";

import useHandler from "./controller";

export default function ProductCard({ data }: { data: IProduct }) {
  const { onAddToCart } = useHandler();

  return (
    <Link
      className="w-[150px] md:w-[270px] flex flex-col items-start"
      to={`/products/${data.id}`}
    >
      <div className="w-full group relative rounded-[4px] overflow-hidden">
        <img
          src={data.images[0]}
          alt=""
          className="bg-second-gray w-full h-[139px] md:h-[250px] object-contain"
        />
        {data.discountPercentage > 0 ? (
          <div className="absolute top-3 left-3 bg-second-red px-3 py-1 rounded-[4px]">
            <h5 className="text-white text-[0.75rem]">
              -{data.discountPercentage}%
            </h5>
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
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(data.id.toString());
          }}
          className="hidden lg:group-hover:block absolute bottom-0 left-0 right-0 bg-black outline-none hover:bg-primary-black text-white text-[1rem] p-2"
        >
          Add To Cart
        </button>
      </div>
      <h3 className="mt-4 text-[1rem] text-wrap line-clamp-2">{data.title}</h3>
      <div className="mt-2 flex">
        <h4 className="text-[1rem] text-second-red">
          ${Math.round((data.price * (100 - data.discountPercentage)) / 100)}
        </h4>
        {(data.discountPercentage * data.price) / 100 ? (
          <h4 className="ml-3 text-[1rem] text-black opacity-50 line-through decoration-1">
            ${data.price}
          </h4>
        ) : null}
      </div>
      {/* //TODO: Update product interfaces to show rating count */}
      <div className="hidden md:flex mt-2">
        <Rate disabled allowHalf defaultValue={data.rating} />
        <h4 className="ml-2 text-[0.875rem] font-medium text-black opacity-50">
          ({2})
        </h4>
      </div>
    </Link>
  );
}
