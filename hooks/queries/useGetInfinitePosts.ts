import { getPosts } from "@/api/post";
import { queryKeys } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetInfinitePosts = () => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getPosts(pageParam),
    queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPost ? allPage.length + 1 : undefined;
    },
  });
};

export default useGetInfinitePosts;
