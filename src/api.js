import axios from "axios";

export default api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

export const getData = async () => {
  const response = await api.get("posts");
  return response;
};

export const getPost = async (id) => {
  const response = await api.get(`posts/${id}`);
  return response;
};
