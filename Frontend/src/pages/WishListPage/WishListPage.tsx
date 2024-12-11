import { Breadcrumb, Button } from "antd";

import { WishList } from "./containers";
import useHandler from "./controller";

export default function WishListPage() {
  const { onAddAllToCart } = useHandler();

  return (
    <>
      <div className="mt-[80px] mb-[60px] flex flex-wrap gap-[40px] justify-between">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "WishList",
            },
          ]}
        />
        <Button
          onClick={onAddAllToCart}
          type="primary"
          style={{
            padding: "16px 48px",
            border: "1px solid #7F7F7F",
            height: "56px",
            background: "#FFFFFF",
            color: "#000000",
          }}
        >
          Move All To Cart
        </Button>
      </div>

      <WishList />
    </>
  );
}
