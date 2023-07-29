import axios from "axios";

const URL = "https://blog-app-ntcog.onrender.com";

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
  axios.post(`${URL}/posts/update`, payload);
export const deletePost = (payload) =>
  axios.delete(`${URL}/posts/delete`, payload);
