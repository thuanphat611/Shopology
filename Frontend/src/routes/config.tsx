import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { DefaultLayout } from "@/layouts";
import {
  HomePage,
  LoginPage,
  ErrorPage,
  ContactPage,
  AboutPage,
  SignupPage,
  CartPage,
  WishListPage,
  CheckOutPage,
  AccountPage,
} from "@/pages";
import PrivateRoute from "./PrivateRoute";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/wish-list",
          element: (
            <PrivateRoute>
              <WishListPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/check-out",
          element: (
            <PrivateRoute>
              <CheckOutPage />
            </PrivateRoute>
          ),
        },
        {
          path: "/account",
          element: (
            <PrivateRoute>
              <AccountPage />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
