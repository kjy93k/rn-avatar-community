import { likePost } from "@/api/post";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { Post, Profile } from "@/types";
import { useMutation } from "@tanstack/react-query";

//onMutate: 낙관적 업데이트, ui 업데이트가 일어날 것을 예상하고 미리 업데이트를 진행 후 서버와 비교
const useLikePost = () => {
  return useMutation({
    mutationFn: likePost,
    onMutate: async (postId) => {
      await queryClient.cancelQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POST, postId],
      });

      const user = queryClient.getQueryData<Profile>([
        queryKeys.AUTH,
        queryKeys.GET_ME,
      ]);
      const userId = Number(user?.id);
      const previousPost = queryClient.getQueryData<Post>([
        queryKeys.POST,
        queryKeys.GET_POST,
        postId,
      ]);
      const newPost = { ...previousPost };
      const likedIndex =
        previousPost?.likes.findIndex((like) => like.userId === userId) ?? -1;

      if (likedIndex > 0) {
        newPost.likes?.splice(likedIndex, 1);
      } else {
        newPost.likes?.push({ userId });
      }

      queryClient.setQueryData(
        [queryKeys.POST, queryKeys.GET_POST, postId],
        newPost
      );

      return { previousPost, newPost };
    },

    onError: (err, newPost, context) => {
      queryClient.setQueryData(
        [queryKeys.POST, queryKeys.GET_POST, context?.previousPost?.id],
        context?.previousPost
      );
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POST, variables],
      });
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POST],
      });
    },
  });
};

export default useLikePost;
