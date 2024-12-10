import { Link } from "react-router-dom";

import { TrashCan } from "@/assets/svg";

import { IWishListItem } from "../../interfaces";

export default function WishListItem({
  data,
  onAddToWishList,
  onRemoveFromWishList,
}: {
  data: IWishListItem;
  onAddToWishList: (productId: string) => Promise<void>;
  onRemoveFromWishList: (productId: string) => Promise<void>;
}) {
  return (
    <Link
      className="w-[calc((100%-20px)/2)] md:w-[calc((100%-60px)/4)] flex flex-col items-start"
      to={`/products/${data.id}`}
    >
      <div className="w-full group relative rounded-[4px] overflow-hidden">
        <img
          src={data.thumbnail}
          alt={data.title}
          className="bg-second-gray w-full h-[120px] md:h-[200px] lg:h-[240px] object-contain mb-[40px]"
        />
        {data.discountPercentage > 0 ? (
          <div className="absolute top-1 left-1 md:top-3 md:left-3 bg-second-red px-1 md:px-3 py-1 rounded-[4px]">
            <h5 className="text-white text-[0.75rem]">
              -{data.discountPercentage}%
            </h5>
          </div>
        ) : null}
        <div className="absolute top-3 right-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              onRemoveFromWishList(data.id);
            }}
            className="bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center hover:text-second-red"
          >
            <TrashCan />
          </button>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToWishList(data.id.toString());
          }}
          className="absolute bottom-0 left-0 right-0 bg-black outline-none hover:bg-primary-black text-white text-[1rem] p-2"
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
    </Link>
  );
}
