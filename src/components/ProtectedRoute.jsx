import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = localStorage.getItem("access_token");

  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
