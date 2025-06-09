import { CreatePostDto, Post } from "@/types";
import $axios from "./axios";

const createPost = async (body: CreatePostDto) => {
  const { data } = await $axios.post("/posts", body);
  return { data };
};

const getPost = async (page = 1): Promise<Post[]> => {
  const { data } = await $axios.get(`/posts?page=${page}`);
  return data;
};

export { createPost, getPost };
