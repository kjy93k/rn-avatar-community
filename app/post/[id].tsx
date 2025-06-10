import AuthRoute from "@/components/AuthRoute";
import CommentItem from "@/components/CommentItem";
import FeedItem from "@/components/Feed/FeedItem";
import InputField from "@/components/InputField";
import { colors } from "@/constants";
import useCreateComment from "@/hooks/queries/useCreateComment";
import useGetPost from "@/hooks/queries/useGetPost";
import { Text } from "@react-navigation/elements";
import { useLocalSearchParams } from "expo-router";
import React, { Fragment, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface PostDetailScreenProps {}

const PostDetailScreen = ({}: PostDetailScreenProps) => {
  const { id } = useLocalSearchParams();
  const { data: post, isPending, isError } = useGetPost(Number(id));
  const createComment = useCreateComment();
  const [content, setContent] = useState("");
  const scrollRef = useRef<ScrollView | null>(null);
  const inputRef = useRef<TextInput | null>(null);
  const [parentCommentId, setParentCommentId] = useState<number | null>(null);

  if (isPending || isError) {
    return <></>;
  }

  const handleReply = (commentId: number) => {
    setParentCommentId(commentId);
    inputRef.current?.focus();
  };

  const handleCancelReply = () => {
    setParentCommentId(null);
    Keyboard.dismiss();
  };

  const handleSubmitComment = () => {
    const commentData = {
      postId: post.id,
      content: content,
    };
    if (parentCommentId) {
      createComment.mutate({ ...commentData, parentCommentId });
      setContent("");
      handleCancelReply();
      return;
    }
    createComment.mutate(commentData);
    setContent("");
    setTimeout(() => {
      scrollRef.current?.scrollToEnd();
    }, 500);
  };

  return (
    <AuthRoute>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.awareScrollViewContainer}
        >
          <ScrollView
            ref={scrollRef}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <View style={{ marginTop: 12 }}>
              <FeedItem post={post} isDetail />
            </View>
            <Text style={styles.commentCount}>댓글 {post.commentCount}개</Text>
            {post.comments?.map((comment) => (
              <Fragment key={comment.id}>
                <CommentItem
                  parentCommentId={parentCommentId}
                  onReply={() => handleReply(comment.id)}
                  onCancelReply={handleCancelReply}
                  comment={comment}
                />
                {comment.replies?.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} isReply />
                ))}
              </Fragment>
            ))}
          </ScrollView>

          <View style={styles.commentInput}>
            <InputField
              ref={inputRef}
              value={content}
              returnKeyType="send"
              onSubmitEditing={handleSubmitComment}
              onChangeText={(text) => setContent(text)}
              placeholder={
                parentCommentId ? "답글 남기는 중..." : "댓글을 남겨주세요."
              }
              rightChild={
                <Pressable
                  style={styles.inputButtonContainer}
                  onPress={handleSubmitComment}
                  disabled={!content}
                >
                  <Text style={styles.inputButtonText}>등록</Text>
                </Pressable>
              }
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </AuthRoute>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  awareScrollViewContainer: {
    flex: 1,
    backgroundColor: colors.Gray_200,
  },
  scrollViewContainer: {
    backgroundColor: colors.Gray_200,
  },
  commentCount: {
    marginTop: 12,
    backgroundColor: colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  commentInput: {
    position: "fixed",
    bottom: 0,
    padding: 16,
    backgroundColor: colors.WHITE,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.Gray_200,
    width: "100%",
  },
  inputButtonContainer: {
    backgroundColor: colors.ORANGE_600,
    padding: 8,
    height: 28,

    borderRadius: 5,
  },
  inputButtonText: {
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default PostDetailScreen;
