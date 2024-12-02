import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Input, Avatar, Button, Dropdown } from "antd";

import { Search, Heart, Cart } from "@/assets/svg";
import { useAuth } from "@/hooks";

import useHandler from "./controller";
import React from "react";

export default function Header() {
  const { getUser, isAuthenticated } = useAuth();
  const user = getUser();
  const { dropdownItems, menuStyle } = useHandler();

  return (
    <div className="fixed top-0 left-0 right-0 border-b-[0.5px] border-[#ccc] bg-white z-50">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-4 pt-10 pb-4 lg:mx-auto">
        <Link
          to="/home"
          className="font-semibold text-second-red text-[1.5rem]"
        >
          Shopology
        </Link>

        <ul className="hidden lg:block space-x-12">
          <Link to="home" className="text-[1rem] hover:text-button-red">
            Home
          </Link>
          <Link to="contact" className="text-[1rem] hover:text-button-red">
            Contact
          </Link>
          <Link to="about" className="text-[1rem] hover:text-button-red">
            About
          </Link>
        </ul>

        <div className="flex items-center space-x-3 md:space-x-6">
          <span className="hidden lg:block">
            <Input
              placeholder="What are you looking for?"
              variant="filled"
              suffix={<Search />}
              style={{
                padding: "7px 12px 7px 20px",
                fontSize: "14px",
                lineHeight: "18px",
              }}
            />
          </span>
          <Link to="wishlist" className="hover:text-button-red">
            <Heart />
          </Link>
          <Link to="cart" className="hover:text-button-red text-center">
            <Cart />
          </Link>
          {isAuthenticated() ? (
            <Dropdown
              placement="topRight"
              menu={{ items: dropdownItems }}
              dropdownRender={(menu) => (
                <div>
                  {React.cloneElement(menu as React.ReactElement, {
                    style: menuStyle,
                  })}
                </div>
              )}
            >
              <Avatar
                src={user?.avatar}
                icon={<UserOutlined />}
                style={{
                  backgroundColor: "#DB4444",
                  minHeight: "32px",
                  minWidth: "32px",
                }}
              />
            </Dropdown>
          ) : (
            <Button size="large" type="primary" href="/signup">
              Signup
            </Button>
          )}
        </div>
      </div>
      <div className="lg:hidden w-full px-4 mb-4 flex justify-center">
        <Input
          placeholder="What are you looking for?"
          variant="filled"
          suffix={<Search />}
          style={{
            maxWidth: "450px",
            padding: "7px 12px 7px 20px",
            fontSize: "14px",
            lineHeight: "18px",
          }}
        />
      </div>
    </div>
  );
}
