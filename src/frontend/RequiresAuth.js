import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../frontend/contexts/index";

export function RequiresAuth({ children }) {
  const { authState } = useAuth();
  const { token } = authState;
  const location = useLocation();

  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
