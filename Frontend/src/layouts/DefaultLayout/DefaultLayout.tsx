import { Outlet } from "react-router-dom";

import { Header, Footer } from "./containers";

export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
