import { AdminNavbar } from "@/components/AdminNavbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-black text-yellow-200">
      <AdminNavbar />
     
      <div className="pt-24 px-6"> 
        <Outlet /> {/* This will load child admin pages */}
      </div>
    </div>
  );
}
