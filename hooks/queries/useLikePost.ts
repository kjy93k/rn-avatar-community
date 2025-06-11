import { likePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";

const useLikePost = () => {
  return useMutation({
    mutationFn: likePost,
    onSuccess: (postId) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS, postId],
      });
    },
  });
};

export default useLikePost;
