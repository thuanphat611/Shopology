import { Spin } from "antd";

import { WishListItem } from "../../components";

import useHandler from "./controller";

export default function WishList() {
  const { data, isLoading, onRemoveItem, onAddToCart } = useHandler();

  return (
    <div>
      <div className="relative mt-4 md:mt-10 md:mb-[140px] flex justify-start flex-wrap gap-y-10 gap-[20px]">
        {data && data.itemList.length > 0 ? (
          data?.itemList.map((item) => (
            <WishListItem
              key={item.thumbnail}
              data={item}
              onAddToWishList={onAddToCart}
              onRemoveFromWishList={onRemoveItem}
            />
          ))
        ) : (
          <h5 className="w-full text-center my-20">No item in wish list</h5>
        )}
      </div>
      {isLoading && (
        <div className="flex flex-col gap-4 fixed top-0 bottom-0 left-0 right-0 justify-center items-center bg-white bg-opacity-50">
          <Spin size="large" />
          <h3 className="text-[1.25rem] font-normal">Loading...</h3>
        </div>
      )}
    </div>
  );
}
