import { Link } from "react-router-dom";
import { Input } from "antd";

import { Search, Heart, Cart } from "@/assets/svg";

export default function Header() {
  // TODO make header responsive
  return (
    <div className="border-b-[0.5px] border-[#ccc]">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-10 pt-10 pb-4 lg:px-0 lg:mx-auto">
        <h5 className="font-semibold text-black text-[24px]">Shopology</h5>
        <ul className="space-x-12">
          <Link to="home" className="text-[16px] hover:text-button-red">
            Home
          </Link>
          <Link to="contact" className="text-[16px] hover:text-button-red">
            Contact
          </Link>
          <Link to="about" className="text-[16px] hover:text-button-red">
            About
          </Link>
        </ul>

        <div className="flex items-center space-x-6">
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
          <Link to="wishlist" className="hover:text-button-red">
            <Heart />
          </Link>
          <Link to="cart" className="hover:text-button-red">
            <Cart />
          </Link>
        </div>
      </div>
    </div>
  );
}
