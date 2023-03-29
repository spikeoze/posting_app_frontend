import { newPost, User } from "../interfaces/interfaces";
import { CurrentUser, Post } from "../interfaces/interfaces";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
  withCredentials: true,
});

// Auth
// export const checkAuth = async (): Promise<CurrentUser> =>
//   api.get("/auth/isauthorized").then((res) => res.data);

export const login = (user: { username: string; password: string }) =>
  api.post("/auth/login", { ...user }).then((res) => console.log(res.data));

export const registerUser = (data: User) =>
  api.post("/auth/register", { ...data }).then((res) => res.data);

export const logOut = () => api.delete("/auth/logout").then((res) => res.data);

// Post
export const getPosts = () => api.get("/post").then((res) => res.data);

export const createPost = async (data: newPost) => {
  const post = await api.post("/post", { ...data });
  return post.data;
};

export const deletePost = (id: number) =>
  api.delete(`/post/${id}`).then((res) => res.data);
