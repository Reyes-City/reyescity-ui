import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AdminNavbar } from "@/components/AdminNavbar";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const refresh = params.get("refresh");

    // ✅ Coming from Discord login
    if (token) {
      localStorage.setItem("accessToken", token);
      if (refresh) {
        localStorage.setItem("refreshToken", refresh);
      }

      // Clean URL
      window.history.replaceState({}, "", "/admin/dashboard");
      return;
    }

    // ❌ No token → go to login
    const storedToken = localStorage.getItem("accessToken");
    if (!storedToken) {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 🔥 NAVBAR ON ALL ADMIN PAGES */}
      <AdminNavbar />

      {/* 🔥 ALL ADMIN PAGES RENDER HERE */}
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
