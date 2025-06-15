import { colors } from "@/constants";
import useGetInfinityPosts from "@/hooks/queries/useGetInfinityPosts";
import { useScrollToTop } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

const FeedList = () => {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetInfinityPosts();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  const handleEndReached = () => {
    hasNextPage && !isFetchingNextPage && fetchNextPage();
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  return (
    <FlatList
      ref={ref}
      data={posts?.pages.flat()}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
