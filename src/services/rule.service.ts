import axios from "axios";

const API = import.meta.env.VITE_BASE_URL;

export const RuleService = {
  // CRUD
  getAll: () => axios.get(`${API}/rules`),

  getById: (id: string) =>
    axios.get(`${API}/rules/${id}`),

  create: (data: any) =>
    axios.post(`${API}/rules`, data),

  update: (id: string, data: any) =>
    axios.put(`${API}/rules/${id}`, data),

  delete: (id: string) =>
    axios.delete(`${API}/rules/${id}`),

  // 👇 REQUIRED FOR HOME / RULES PAGE
  getCategories: () =>
    axios.get(`${API}/rules/categories`),

  getByCategory: (category: string) =>
    axios.get(`${API}/rules/category/${category}`),
};
