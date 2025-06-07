import { colors } from "@/constants";
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import FeedItem from "./FeedItem";

interface FeedListProps {}

const dummyData = [
  {
    id: 1,
    userId: 101,
    title: "타입스크립트 예제 게시물",
    description: "이 게시물은 Post 타입을 기반으로 생성된 더미 데이터입니다.",
    createdAt: "2025-06-07T15:00:00Z",
    author: {
      id: 101,
      nickname: "개발자101",
      imageUri: "https://example.com/avatar101.png",
    },
    imageUris: [
      { uri: "https://example.com/image1.jpg" },
      { uri: "https://example.com/image2.jpg" },
    ],
    likes: [{ userId: 201 }, { userId: 202 }, { userId: 203 }],
    hasVote: true,
    voteCount: 3,
    commentCount: 2,
    viewCount: 789,
    votes: [
      {
        id: 1,
        title: "당신의 선택은?",
        options: [
          {
            id: 1,
            displayPriority: 1,
            content: "옵션 A",
            userVotes: [{ userId: 201 }],
          },
          {
            id: 2,
            displayPriority: 2,
            content: "옵션 B",
            userVotes: [{ userId: 202 }, { userId: 203 }],
          },
        ],
      },
    ],
    comments: [
      {
        id: 1,
        content: "정말 유익한 게시물입니다!",
        createdAt: "2025-06-07T15:30:00Z",
        user: {
          id: 301,
          nickname: "댓글러1",
          imageUri: "https://example.com/avatar301.png",
        },
        isDeleted: false,
        replies: [
          {
            id: 3,
            content: "저도 그렇게 생각해요!",
            createdAt: "2025-06-07T15:45:00Z",
            user: {
              id: 302,
              nickname: "답글유저",
              imageUri: "https://example.com/avatar302.png",
            },
            isDeleted: false,
          },
        ],
      },
      {
        id: 2,
        content: "잘 읽었습니다.",
        createdAt: "2025-06-07T16:00:00Z",
        user: {
          id: 303,
          nickname: "댓글러2",
          imageUri: "https://example.com/avatar303.png",
        },
        isDeleted: false,
        replies: [],
      },
    ],
  },
];

const FeedList = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.Gray_200,
    gap: 12,
  },
});

export default FeedList;
