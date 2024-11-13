import { useNavigate } from "react-router-dom";
import { Breadcrumb, Button } from "antd";

import { Header, Footer } from "@/layouts/DefaultLayout";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <div className="w-full max-w-screen-xl px-10 mb-20 grow lg:px-0 lg:mx-auto mt-[96px]">
        <div className="mt-[80px] mb-[140px]">
          <Breadcrumb
            items={[
              {
                title: <a href="/home">Home</a>,
              },
              {
                title: "404 Error",
              },
            ]}
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-center text-[50px] md:text-[110px] font-semibold  md:leading-[115px] mb-10">
            404 NOT FOUND
          </h1>
          <p className="text-[16px] mb-24 text-center">
            Your visited page not found. You may go home page.
          </p>
          <Button
            type="primary"
            style={{
              backgroundColor: "#DB4444",
              fontSize: "16px",
              lineHeight: "24px",
              borderRadius: "4px",
              padding: "16px 48px",
            }}
            size="large"
            onClick={() => navigate("/home")}
          >
            Back to home page
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
