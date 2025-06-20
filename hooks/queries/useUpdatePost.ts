import { updatePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";

const useUpdatePost = () => {
  return useMutation({
    mutationFn: updatePost,
    onSuccess: (postId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS, postId],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
      router.back();
    },
  });
};

export default useUpdatePost;
