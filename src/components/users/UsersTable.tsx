type Props = {
  data?: any[];
  onEdit: (user: any) => void;
  onDelete: (id: string) => void;
};

export default function UsersTable({
  data = [],
  onEdit,
  onDelete,
}: Props) {
  if (!Array.isArray(data)) {
    return <p className="text-red-400">Invalid users data</p>;
  }

  return (
    <table className="w-full border border-yellow-600/40">
      <thead className="bg-yellow-600/20">
        <tr>
          <th className="p-3 text-left">Username</th>
          <th className="p-3 text-left">Discord ID</th>
          <th className="p-3">Role</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td
              colSpan={5}
              className="p-6 text-center text-yellow-400/60"
            >
              No users found
            </td>
          </tr>
        ) : (
          data.map((u) => (
            <tr
              key={u._id}
              className="border-t border-yellow-600/20"
            >
              <td className="p-3">{u.username}</td>

              <td className="p-3 text-sm text-yellow-300/80">
                {u.discordId}
              </td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    u.role === "SUPER_ADMIN"
                      ? "bg-purple-500/20 text-purple-400"
                      : u.role === "ADMIN"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-gray-500/20 text-gray-300"
                  }`}
                >
                  {u.role}
                </span>
              </td>

              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    u.status === "active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {u.status}
                </span>
              </td>

              <td className="p-3 flex gap-4">
                <button
                  onClick={() => onEdit(u)}
                  className="text-blue-400 hover:underline"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(u._id)}
                  className="text-red-400 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
