import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/users.api";

export default function CreateUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    discordId: "",
    role: "STAFF",
    status: "active",
  });

  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      await createUser(form);

      alert("✅ User added successfully");

      // clear form
      setForm({
        username: "",
        discordId: "",
        role: "STAFF",
        status: "active",
      });

      // redirect
      navigate("/admin/staff");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Add User</h1>
        <p className="text-white/60 mt-1">
          Add admin or staff and manage access
        </p>
      </div>

      {/* Card */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        
        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm text-white/70 mb-1">
            Username
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            placeholder="Leon Knox"
            value={form.username}
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
        </div>

        {/* Discord ID */}
        <div className="mb-4">
          <label className="block text-sm text-white/70 mb-1">
            Discord ID
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            placeholder="1091344737883131914"
            value={form.discordId}
            onChange={(e) =>
              setForm({ ...form, discordId: e.target.value })
            }
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm text-white/70 mb-1">
            Role
          </label>
          <select
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="SUPER_ADMIN">Super Admin</option>
            <option value="ADMIN">Admin</option>
            <option value="STAFF">Staff</option>
          </select>
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="block text-sm text-white/70 mb-1">
            Status
          </label>
          <select
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-yellow-400"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={loading}
            className="px-6 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save User"}
          </button>
        </div>
      </div>
    </div>
  );
}
