import { Outlet } from "react-router-dom";

import { Header, Footer } from "./containers";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <div className="w-full max-w-screen-xl px-10 lg:px-0 lg:mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
