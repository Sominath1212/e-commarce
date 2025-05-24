import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check for token in localStorage

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
