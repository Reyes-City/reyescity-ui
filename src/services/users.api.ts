import axios from "axios";

const API = import.meta.env.VITE_BASE_URL;

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

/* GET ALL USERS */
export const getUsers = async () => {
  const res = await axios.get(`${API}/admin/users`, authHeader());
  return res.data.data; // IMPORTANT
};

/* ADD USER */
export const createUser = async (data: any) => {
  const res = await axios.post(
    `${API}/admin/users`,
    data,
    authHeader()
  );
  return res.data;
};

/* DELETE USER */
export const deleteUser = async (id: string) => {
  const res = await axios.delete(
    `${API}/admin/users/${id}`,
    authHeader()
  );
  return res.data;
};
