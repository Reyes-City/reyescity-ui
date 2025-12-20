import { AdminNavbar } from "@/components/AdminNavbar";

export const Admin = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <AdminNavbar />

      <div className="pt-28 px-10">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-yellow-200/80">
          Manage your content, staff, announcements, banners, and more.
        </p>
      </div>
    </div>
  );
};
