import { useEffect, useState } from "react";
import UsersTable from "@/components/users/UsersTable";
import { getUsers, deleteUser } from "../../services/users.api";

import { useNavigate } from "react-router-dom";

export default function ManageUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Manage Users
          </h1>
          <p className="text-white/60 mt-1">
            View and manage admin & staff users
          </p>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
        <UsersTable data={users} onDelete={handleDelete} />
      </div>
    </div>
  );
}
