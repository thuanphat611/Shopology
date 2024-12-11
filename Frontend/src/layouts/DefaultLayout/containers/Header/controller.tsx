import { useEffect } from "react";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";

import { MallBox, User, Cancel, Review, Logout } from "@/assets/svg";
import { useAuth } from "@/hooks";
import { AuthService } from "@/api";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchCartCount, selectCartCount } from "@/app/slices/cartSlice";
import {
  fetchWishListCount,
  selectWishListCount,
} from "@/app/slices/wishlistSlice";

const menuStyle: React.CSSProperties = {
  background: "rgba(0,0,0,0.35)",
  backdropFilter: "blur(30px)",
};

export default function useHandler() {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);
  const wishlistCount = useAppSelector(selectWishListCount);
  const { logout } = useAuth();

  useEffect(() => {
    dispatch(fetchCartCount());
    dispatch(fetchWishListCount());
  }, [dispatch]);

  const dropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          to="/account"
          className="flex gap-x-2 items-center h-[30px] text-white text-[0.875rem]"
        >
          <User />
          Manage My Account
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to="/orders"
          className="flex gap-x-2 items-center h-[30px] text-white text-[0.875rem]"
        >
          <MallBox />
          My Order
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          to="/cancelations"
          className="flex gap-x-2 items-center h-[30px] text-white text-[0.875rem]"
        >
          <Cancel />
          My Cancelations
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          to="/reviews"
          className="flex gap-x-2 items-center h-[30px] text-white text-[0.875rem]"
        >
          <Review />
          My Reviews
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <p className="flex gap-x-2 items-center h-[30px] text-white text-[0.875rem]">
          <Logout />
          Logout
        </p>
      ),
      onClick: handleLogout,
    },
  ];

  async function handleLogout() {
    await AuthService.logout();
    logout();
    window.location.reload();
  }

  return {
    cartCount,
    wishlistCount,
    dropdownItems,
    menuStyle,
  };
}
