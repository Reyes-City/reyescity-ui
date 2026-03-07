import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/duty-report",
});

export const getDepartments = () => api.get("/departments");

export const getAvailableMonths = () => api.get("/available-months");

export const getMonthlyReport = (params: {
  department: string;
  month: number;
  year: number;
}) => api.get("/monthly", { params });

export const downloadExcel = (params: {
  department: string;
  month: number;
  year: number;
}) => {
  const url =
    import.meta.env.VITE_BASE_URL +
    `/duty-report/export?department=${params.department}&month=${params.month}&year=${params.year}`;

  window.open(url);
};