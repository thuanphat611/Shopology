import { Link } from "react-router-dom";
import { Breadcrumb, Button, Input, Form } from "antd";

import useHandler from "./controller";
import { formValidationRules } from "./validation";

export default function AccountPage() {
  const { user, form, formInitialValues, onSubmit } = useHandler();

  return (
    <>
      <div className="my-[80px] flex justify-between">
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
        <h5 className="hidden md:inline text-[1rem] leading-normal">
          Hi <p className="text-second-red inline">{user?.firstName}</p>
        </h5>
      </div>
      <div className="flex gap-[10%] justify-between mb-[140px]">
        <div className="hidden grow md:flex flex-col">
          <h5 className="text-[1rem] leading-normal font-medium mb-[16px]">
            Manage My Account
          </h5>
          <ul className="ml-[35px] flex flex-col gap-y-[8px]">
            <li>
              <Link
                to=""
                className="text-[1rem] leading-normal text-second-red"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-[1rem] leading-normal text-black text-opacity-50"
              >
                Address Book
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-[1rem] leading-normal text-black text-opacity-50"
              >
                My Payment Options
              </Link>
            </li>
          </ul>
          <h5 className="text-[1rem] leading-normal font-medium mb-[16px] mt-[24px]">
            My Orders
          </h5>
          <ul className="ml-[35px] flex flex-col gap-y-[8px]">
            <li>
              <Link
                to=""
                className="text-[1rem] leading-normal text-black text-opacity-50"
              >
                My Returns
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="text-[1rem] leading-normal text-black text-opacity-50"
              >
                My Cancellations
              </Link>
            </li>
          </ul>
        </div>
        <div className="grow flex flex-col">
          <Form
            form={form}
            initialValues={formInitialValues}
            onFinish={onSubmit}
            className="flex flex-col border-[2px] border-second-gray shadow-lg px-[40px] lg:px-[80px] py-10"
          >
            <h4 className="text-[1.25rem] leading-[1.75rem] font-medium text-second-red mb-[16px]">
              Edit Your Profile
            </h4>
            <div className="flex flex-col md:flex-row md:gap-x-5 lg:gap-x-10 gap-y-[24px] mb-[24px]">
              <div className="flex flex-col grow">
                <h4 className="text-[1rem] leading-normal mb-[8px]">
                  First Name
                </h4>
                <Form.Item
                  rules={formValidationRules.firstName}
                  name="firstName"
                >
                  <Input
                    value={user?.firstName}
                    variant="filled"
                    size="large"
                    style={{
                      color: "#7A7A7A",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                    required
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col grow">
                <h4 className="text-[1rem] leading-normal mb-[8px]">
                  Last Name
                </h4>
                <Form.Item rules={formValidationRules.lastName} name="lastName">
                  <Input
                    value={user?.lastName}
                    variant="filled"
                    size="large"
                    style={{
                      color: "#7A7A7A",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                    required
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-x-5 lg:gap-x-10 gap-y-[24px] mb-[24px]">
              <div className="flex flex-col grow">
                <h4 className="text-[1rem] leading-normal mb-[8px]">Email</h4>
                <Form.Item rules={formValidationRules.email} name="email">
                  <Input
                    value={user?.email}
                    variant="filled"
                    size="large"
                    style={{
                      color: "#7A7A7A",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                    required
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col grow">
                <h4 className="text-[1rem] leading-normal mb-[8px]">Phone</h4>
                <Form.Item rules={formValidationRules.phone} name="phone">
                  <Input
                    value={user?.phone}
                    variant="filled"
                    size="large"
                    style={{
                      color: "#7A7A7A",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                    required
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col mb-[24px]">
              <h4 className="text-[1rem] leading-normal mb-[8px]">
                Password Changes
              </h4>
              <span className="mb-[8px] md:mb-0">
                <Form.Item name="password">
                  <Input
                    placeholder="Current Password"
                    variant="filled"
                    size="large"
                    type="password"
                    style={{
                      color: "#7A7A7A",
                      marginBottom: "16px",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                  />
                </Form.Item>
              </span>
              <span className="mb-[8px] md:mb-0">
                <Form.Item name="newPassword">
                  <Input
                    placeholder="New Password"
                    variant="filled"
                    size="large"
                    type="password"
                    style={{
                      color: "#7A7A7A",
                      marginBottom: "16px",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                  />
                </Form.Item>
              </span>
              <span className="mb-[8px] md:mb-0">
                <Form.Item name="confirmNewPassword">
                  <Input
                    placeholder="Confirm New Password"
                    variant="filled"
                    size="large"
                    type="password"
                    style={{
                      color: "#7A7A7A",
                      marginBottom: "16px",
                      borderRadius: "4px",
                      flexGrow: 1,
                      height: "50px",
                    }}
                  />
                </Form.Item>
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <Button
                type="text"
                size="large"
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                size="large"
                style={{
                  borderRadius: "4px",
                  height: "50px",
                }}
                htmlType="submit"
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
