import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { LoginSideImage } from "@/assets/images";

import useHandler from "./controller";

export default function LoginPage() {
  const { form, onLogin } = useHandler();

  return (
    <div>
      <div className="flex">
        <img src={LoginSideImage} className="hidden w-0 grow lg:block" />
        <div className="flex flex-col items-center justify-center w-0 py-[100px] sm:py-8 grow">
          <h2 className="text-[36px] mb-6">Login to Shopology</h2>
          <p className="text[16px] mb-12">Enter your detail below</p>
          <Form name="login-form" form={form} onFinish={onLogin}>
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
              <Input.Password
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
            <div className="flex w-full gap-x-[87px] items-center justify-center mt-10">
              <Form.Item>
                <Button
                  type="primary"
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.5",
                    borderRadius: "4px",
                    width: "143px",
                    height: "56px",
                  }}
                  size="large"
                  htmlType="submit"
                >
                  Log In
                </Button>
              </Form.Item>
              <Link
                to=""
                className="block p-4 text-second-red text-[16px] hover:text-button-hover-red"
              >
                Forget password
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
