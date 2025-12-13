type Props = {
  data?: any[];
  onEdit: (rule: any) => void;
  onDelete: (id: string) => void;
};

export default function RulesTable({
  data = [],
  onEdit,
  onDelete,
}: Props) {
  if (!Array.isArray(data)) {
    return (
      <p className="text-red-400">
        Invalid rules data
      </p>
    );
  }

  return (
    <table className="w-full border border-yellow-600/40">
      <thead className="bg-yellow-600/20">
        <tr>
          <th className="p-3">Rule</th>
          <th className="p-3">Category</th>
          <th className="p-3">Status</th>
          <th className="p-3">Order</th>
          <th className="p-3">Important</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((r) => (
          <tr
            key={r._id}
            className="border-t border-yellow-600/20"
          >
            <td className="p-3">{r.ruleName}</td>
            <td className="p-3">{r.category}</td>

            <td className="p-3">
              <span
                className={`px-2 py-1 rounded text-xs ${
                  r.status === "active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {r.status}
              </span>
            </td>

            <td className="p-3">{r.order}</td>
            <td className="p-3">
              {r.importantStatus ? "⭐" : "-"}
            </td>

            <td className="p-3 flex gap-3">
              <button
                className="text-blue-400"
                onClick={() => onEdit(r)}
              >
                Edit
              </button>
              <button
                className="text-red-400"
                onClick={() => onDelete(r._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
