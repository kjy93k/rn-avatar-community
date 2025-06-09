import { CreatePostDto } from "@/types";
import $axios from "./axios";
const createPost = async (body: CreatePostDto) => {
  const { data } = await $axios.post("/posts", body);
  return { data };
};

export { createPost };
