import $axios from "@/api/axios";
import { CreateCommentDto } from "@/types";

const createComment = async (body: CreateCommentDto) => {
  const { data } = await $axios.post("/comments", body);
  return data;
};

const deleteComment = async (id: number) => {
  const { data } = await $axios.delete(`/comments/${id}`);
  return data;
};

export { createComment, deleteComment };
