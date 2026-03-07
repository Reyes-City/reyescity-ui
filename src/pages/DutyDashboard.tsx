import { useEffect, useState } from "react";
import {
  getDepartments,
  getAvailableMonths,
  getMonthlyReport,
  downloadExcel,
} from "../services/dutyReport.service";

import DutyTable from "../components/DutyTable";
import { DutyReport } from "../constants/types";

export default function DutyDashboard() {

  const [departments, setDepartments] = useState<string[]>([]);
  const [months, setMonths] = useState<any[]>([]);
  const [data, setData] = useState<DutyReport[]>([]);
  const [loading, setLoading] = useState(false);

  const [department, setDepartment] = useState("");
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    loadInitial();
  }, []);

  const loadInitial = async () => {

    try {

      const dep = await getDepartments();
      setDepartments(dep.data.data);

      const m = await getAvailableMonths();
      setMonths(m.data.data);

      if (dep.data.data.length) {
        setDepartment(dep.data.data[0]);
      }

      if (m.data.data.length) {
        setMonth(m.data.data[0].month);
        setYear(m.data.data[0].year);
      }

    } catch (err) {
      console.error(err);
    }

  };

  useEffect(() => {
    if (department && month && year) {
      loadReport();
    }
  }, [department, month, year]);

  const loadReport = async () => {

    try {

      setLoading(true);

      const res = await getMonthlyReport({
        department,
        month,
        year,
      });

      setData(res.data.data || []);

    } catch (err) {

      console.error(err);
      setData([]);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6 text-white text-center">
        Duty Monthly Report
      </h1>

      {/* Filter Section */}

      <div className="bg-[#0d0d0d] rounded-lg p-2 mb-6">

<div className="bg-[#0d0d0d] rounded-lg p- mb-6">

  <div className="flex items-end">

    {/* LEFT FILTERS */}
    <div className="flex gap-6">

      {/* Department */}
      <div>
        <label className="text-xs text-gray-400 block mb-1">
          Department
        </label>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-black border border-gray-700 px-3 py-2 rounded text-white"
        >
          {departments.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Month */}
      <div>
        <label className="text-xs text-gray-400 block mb-1">
          Month
        </label>

        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="bg-black border border-gray-700 px-3 py-2 rounded text-white"
        >
          {months.map((m, i) => (
            <option key={i} value={m.month}>
              {m.month}
            </option>
          ))}
        </select>
      </div>

      {/* Year */}
      <div>
        <label className="text-xs text-gray-400 block mb-1">
          Year
        </label>

        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="bg-black border border-gray-700 px-3 py-2 rounded text-white"
        >
          {months.map((m, i) => (
            <option key={i} value={m.year}>
              {m.year}
            </option>
          ))}
        </select>
      </div>

    </div>

    {/* RIGHT BUTTON */}
    <div className="ml-auto shrink-0">
      <button
        onClick={() => downloadExcel({ department, month, year })}
        className="bg-yellow-600 hover:bg-yellow-500 text-black text-sm px-4 py-2 rounded font-medium"
      >
        ⬇️ Export Excel
      </button>
    </div>

  </div>

</div>

      </div>

      {/* Table Section */}

      {loading ? (

        <div className="text-center text-gray-400 py-10">
          Loading data...
        </div>

      ) : data.length === 0 ? (

        <div className="text-center text-gray-400 py-10 border border-gray-700 rounded-lg">
          No Data Found
        </div>

      ) : (

        <DutyTable data={data} />

      )}

    </div>

  );
}