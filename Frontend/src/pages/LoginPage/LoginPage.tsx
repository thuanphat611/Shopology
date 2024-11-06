import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { LoginSideImage } from "@/assets/images";

export default function LoginPage() {
  const [form] = Form.useForm();

  return (
    <div>
      <div className="flex">
        <img src={LoginSideImage} className="hidden w-0 grow lg:block" />
        <div className="flex flex-col items-center justify-center w-0 py-[100px] sm:py-8 grow">
          <h2 className="text-[36px] mb-6">Login to Shopology</h2>
          <p className="text[16px] mb-12">Enter your detail below</p>
          <Form name="login-form" form={form}>
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input
                placeholder="Enter your email"
                variant="borderless"
                style={{
                  paddingRight: "0",
                  paddingLeft: "0",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "0",
                  width: "370px",
                  fontSize: "16px",
                }}
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                placeholder="Password"
                variant="borderless"
                style={{
                  paddingRight: "0",
                  paddingLeft: "0",
                  borderBottom: "1px solid #ccc",
                  borderRadius: "0",
                  width: "370px",
                  fontSize: "16px",
                }}
              />
            </Form.Item>
          </Form>
          <div className="flex w-full gap-x-[87px] items-center justify-center mt-4">
            <Button
              type="primary"
              style={{
                // backgroundColor: "#DB4444",
                fontSize: "16px",
                lineHeight: "1.5",
                borderRadius: "4px",
                width: "143px",
                height: "56px",
              }}
              size="large"
            >
              Log In
            </Button>
            <Link
              to=""
              className="block p-4 text-second-red text-[16px] hover:text-button-hover-red"
            >
              Forget password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
