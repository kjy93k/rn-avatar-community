import { getSearchPosts } from "@/api/post";
import { queryKeys } from "@/constants";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetInfiniteSearchPosts = (query: string) => {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => getSearchPosts(pageParam, query),
    queryKey: [
      queryKeys.POST,
      queryKeys.GET_POSTS,
      queryKeys.GET_SEARCH_POSTS,
      query,
    ],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastPost = lastPage[lastPage.length - 1];
      return lastPost ? allPage.length + 1 : undefined;
    },
  });
};

export default useGetInfiniteSearchPosts;
