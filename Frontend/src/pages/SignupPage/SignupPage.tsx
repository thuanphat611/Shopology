import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

import { LoginSideImage } from "@/assets/images";

import useHandler from "./controller";

export default function SignupPage() {
  const { form, formDisable, onSignup } = useHandler();

  return (
    <div>
      <div className="flex">
        <img src={LoginSideImage} className="hidden w-0 grow lg:block" />
        <div className="flex flex-col items-center justify-center w-0 py-[100px] sm:py-8 grow">
          <h2 className="text-[36px] mb-6">Create an account</h2>
          <p className="text[16px] mb-12">Enter your detail below</p>
          <Form
            name="login-form"
            form={form}
            onFinish={onSignup}
            disabled={formDisable}
          >
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                placeholder="First name"
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
            <Form.Item
              name="lastName"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                placeholder="Last name"
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
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                placeholder="Email"
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
            <Form.Item
              name="phone"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input
                placeholder="Phone number"
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
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
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
            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: "Please input this field!" }]}
            >
              <Input.Password
                placeholder="Enter your password again"
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
            <Form.Item>
              <Button
                type="primary"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.5",
                  borderRadius: "4px",
                  width: "100%",
                  height: "56px",
                }}
                size="large"
                htmlType="submit"
              >
                Sign up
              </Button>
            </Form.Item>
            <h3 className="block text-[16px]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[16px] text-black font-semibold hover:text-button-hover-red inline underline underline-offset-4"
              >
                Log in
              </Link>
            </h3>
          </Form>
        </div>
      </div>
    </div>
  );
}
