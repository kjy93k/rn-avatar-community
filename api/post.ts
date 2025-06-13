import $axios from "@/api/axios";
import { CreatePostDto, CreateVoteDto, Post, VoteOption } from "@/types";

const createPost = async (body: CreatePostDto) => {
  const { data } = await $axios.post("/posts", body);
  return { data };
};

const getPosts = async (page = 1): Promise<Post[]> => {
  const { data } = await $axios.get(`/posts?page=${page}`);
  return data;
};

const getMyPosts = async (page = 1): Promise<Post[]> => {
  const { data } = await $axios.get(`/posts/my?page=${page}`);
  return data;
};

const getUserPosts = async (id: number, page = 1): Promise<Post[]> => {
  const { data } = await $axios.get(`/posts/user/${id}?page=${page}`);
  return data;
};

const getLikedPosts = async (page = 1): Promise<Post[]> => {
  const { data } = await $axios.get(`/likes?page=${page}`);
  return data;
};

const deletePost = async (id: number): Promise<number> => {
  const { data } = await $axios.delete(`/posts/${id}`);

  return data;
};

const getPost = async (id: number): Promise<Post> => {
  const { data } = await $axios.get(`/posts/${id}`);
  return data;
};

type RequestUpdatePost = {
  id: number;
  body: CreatePostDto;
};

const updatePost = async ({ id, body }: RequestUpdatePost) => {
  const { data } = await $axios.patch(`/posts/${id}`, body);

  return data;
};

const createVote = async ({
  postId,
  voteOptionId,
}: CreateVoteDto): Promise<{ postId: number; VoteOption: VoteOption }> => {
  const { data } = await $axios.post(`/posts/${postId}/vote/${voteOptionId}`);

  return data;
};

const likePost = async (id: number): Promise<number> => {
  const { data } = await $axios.post(`/likes/${id}`);

  return data;
};
export {
  createPost,
  createVote,
  deletePost,
  getLikedPosts,
  getMyPosts,
  getPost,
  getPosts,
  getUserPosts,
  likePost,
  updatePost,
};
