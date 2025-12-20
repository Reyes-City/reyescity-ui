import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const token = localStorage.getItem("accessToken");
  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminProtectedRoute;
