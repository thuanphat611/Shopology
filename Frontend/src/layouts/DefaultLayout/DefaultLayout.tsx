import { Outlet } from "react-router-dom";

import { Header, Footer } from "./containers";

export default function DefaultLayout() {
  return (
    <div className="relative">
      <Header />
      <div className="w-full max-w-screen-xl px-10 lg:px-0 lg:mx-auto pt-[96px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
