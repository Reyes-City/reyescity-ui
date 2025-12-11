import axios from "axios";
import { PremiumGroup } from "../constants/types";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + "/premium",
});

export const getPremium = () => api.get("/");
export const createPremium = (data: {
  tag: string;
  premiumTitle: string;
  shortDescription: string;
  rate: string;
  validity: string;
  description: string;
  mostPopular: boolean;
  exclusive: boolean;
}) => api.post("/", data);
export const updatePremium = (
  id: string,
  data: {
    tag: string;
    premiumTitle: string;
    shortDescription: string;
    rate: string;
    validity: string;
    description: string;
    mostPopular: boolean;
    exclusive: boolean;
  }
) => api.put(`/${id}`, data);
export const deletePremium = (id: string) => api.delete(`/${id}`);

export const getPremiumPlans = async () => {
  const res = await axios.get<PremiumGroup[]>(import.meta.env.VITE_BASE_URL + "/premium/grouped/all");
  return res.data;
};

