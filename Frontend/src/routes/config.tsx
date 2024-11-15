import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import {
  HomePage,
  LoginPage,
  ErrorPage,
  ContactPage,
  AboutPage,
} from "@/pages";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
