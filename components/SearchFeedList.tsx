import { colors } from "@/constants";
import useGetInfiniteSearchPosts from "@/hooks/queries/useGetInfiniteSearchPosts";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Platform, StatusBar, StyleSheet, View } from "react-native";
import FeedItem from "./Feed/FeedItem";
import SearchInput from "./InputField/SearchInput";

const SearchFeedList = () => {
  const [keyword, setKeyword] = useState("");
  const [submitKeyword, setSubmitKeyword] = useState("");
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetInfiniteSearchPosts(submitKeyword);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleEndReached = () => {
    hasNextPage && !isFetchingNextPage && fetchNextPage();
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <Feather
          style={styles.arrowLeft}
          name="arrow-left"
          size={28}
          color={colors.BLACK}
          onPress={() => router.back()}
        />
        <SearchInput
          autoFocus
          value={keyword}
          onChangeText={(text) => setKeyword(text)}
          onSubmit={() => setSubmitKeyword(keyword)}
          onSubmitEditing={() => setSubmitKeyword(keyword)}
          placeholder="글 제목 검색"
        />
      </View>
      <FlatList
        data={posts?.pages.flat()}
        renderItem={({ item }) => <FeedItem post={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.contentContainer}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: colors.WHITE,
    height: 44,
  },
  arrowLeft: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {},
});

export default SearchFeedList;
