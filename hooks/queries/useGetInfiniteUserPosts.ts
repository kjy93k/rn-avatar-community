import { getUserPosts } from "@/api/post";
import { queryKeys } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetInfiniteUserPosts = (userId: number) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getUserPosts(userId, pageParam),
    queryKey: [queryKeys.POST, queryKeys.GET_POSTS, queryKeys.GET_MY_POSTS],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPost ? allPage.length + 1 : undefined;
    },
  });
};

export default useGetInfiniteUserPosts;
