import { colors } from "@/constants";
import { Post } from "@/types";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface FeedItemProps {
  post: Post;
}

const FeedItem = ({ post }: FeedItemProps) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {post.description}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <Pressable
          style={styles.menu}
          onPress={() => setIsLike((prev) => !prev)}
        >
          <Octicons
            name={isLike ? "heart-fill" : "heart"}
            size={16}
            color={isLike ? colors.ORANGE_600 : colors.BLACK}
          />
          <Text style={isLike ? styles.activeMenuText : styles.menuText}>
            1
          </Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={16}
            color={colors.BLACK}
          />
          <Text>1</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Ionicons name="eye-outline" size={16} color={colors.BLACK} />
          <Text>1</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: { padding: 16 },
  title: {
    margin: 8,
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: 600,
  },
  description: {
    margin: 14,
    fontSize: 16,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.Gray_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    gap: 6,
    width: "33%",
  },
  menuText: {
    fontSize: 14,
    color: colors.Gray_700,
  },
  activeMenuText: {
    fontWeight: 500,
    color: colors.ORANGE_600,
  },
});

export default FeedItem;
