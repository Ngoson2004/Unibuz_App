import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { PropsWithChildren } from "react";

const ProtectedRoutes = ({ children }: PropsWithChildren) => {
  const { session } = useAuth();

  if (!session) {
    // user is not authenticated
    return <Navigate to="/auth/sign-in" />;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
