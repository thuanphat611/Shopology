import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

import { useAuth } from "@/hooks";

export default function PrivateRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
