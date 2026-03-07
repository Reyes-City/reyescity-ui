import { DutyReport } from "../constants/types";

export default function DutyTable({ data }: { data: DutyReport[] }) {
  return (
    <div className="rounded-lg border border-yellow-700 overflow-hidden bg-black">

      <table className="w-full text-sm text-left text-gray-300">

        <thead className="bg-[#1a1a1a] text-gray-400 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Discord Name</th>
            <th className="px-6 py-3">Discord ID</th>
            <th className="px-6 py-3">Department</th>
            <th className="px-6 py-3">Last Duty</th>
            <th className="px-6 py-3">Total Hours</th>
            <th className="px-6 py-3">Peak Hours</th>
            <th className="px-6 py-3">Off Peak</th>
          </tr>
        </thead>

        <tbody>

          {data.map((row, i) => (
            <tr
              key={i}
              className="border-t border-yellow-900 hover:bg-[#111111] transition"
            >

              <td className="px-6 py-3 font-medium text-white">
                {row.discordName}
              </td>

              <td className="px-6 py-3 text-yellow-400">
                {row.discordId}
              </td>

              <td className="px-6 py-3">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  {row.department}
                </span>
              </td>

              <td className="px-6 py-3">
                {new Date(row.lastDutyDate).toLocaleDateString()}
              </td>

              <td className="px-6 py-3 text-green-400 font-semibold">
                {row.totalHours}
              </td>

              <td className="px-6 py-3 text-blue-400">
                {row.peakHours}
              </td>

              <td className="px-6 py-3 text-gray-400">
                {row.offPeakHours}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}