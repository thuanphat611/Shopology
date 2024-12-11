import { Breadcrumb } from "antd";

export default function CheckOutPage() {
  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: <a href="/cart">Cart</a>,
            },
            {
              title: "CheckOut",
            },
          ]}
        />
      </div>
    </>
  );
}
