export const PremiumTable = ({ data, onEdit, onDelete }) => {
  return (
    <table className="w-full border border-yellow-600/40 text-left">
      <thead className="bg-yellow-600/20">
        <tr>
          <th className="p-3">Title</th>
          <th className="p-3">Tag</th>
          <th className="p-3">Rate</th>
          <th className="p-3">Validity</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((p) => (
          <tr key={p._id} className="border-b border-yellow-600/20">
            <td className="p-3">{p.premiumTitle}</td>
            <td className="p-3">{p.tag}</td>
            <td className="p-3">₹{p.rate}</td>
            <td className="p-3">{p.validity} days</td>

            <td className="p-3 flex gap-3">
              <button className="text-blue-400" onClick={() => onEdit(p)}>Edit</button>
              <button className="text-red-400" onClick={() => onDelete(p._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
