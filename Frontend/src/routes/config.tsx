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
} from "@/pages";
import { useAuth } from "@/hooks";

export default function AppRouter() {
  const { isAuthenticated } = useAuth();

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
          element: isAuthenticated() ? (
            <CartPage />
          ) : (
            <Navigate to="/login" replace />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
