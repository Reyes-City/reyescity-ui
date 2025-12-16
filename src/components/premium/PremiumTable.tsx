import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export const PremiumTable = ({ data, onEdit, onDelete }:any) => {
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
        {data.map((p: { _id: Key | null | undefined; premiumTitle: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; rate: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; validity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
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
