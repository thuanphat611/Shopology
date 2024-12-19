import { Breadcrumb } from "antd";

import useHandler from "./controller";

export default function ProductPage() {
  useHandler();

  return (
    <>
      <div className="my-[80px]">
        <Breadcrumb
          items={[
            {
              title: <a href="/home">Home</a>,
            },
            {
              title: "Product",
            },
          ]}
        />
      </div>
    </>
  );
}
