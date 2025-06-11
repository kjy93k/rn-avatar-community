import { colors } from "@/constants";
import { PostVoteOption } from "@/types";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface VoteOptionProps {
  option: PostVoteOption;
  totalCount: number;
  isVoted: boolean;
  isSelected: boolean;
  onSelectOption: () => void;
}

const VoteOption = ({
  option,
  totalCount,
  isVoted,
  isSelected,
  onSelectOption,
}: VoteOptionProps) => {
  const percent = option.userVotes.length
    ? Math.floor((option.userVotes.length / totalCount) * 100)
    : 0;

  return (
    <>
      {isVoted ? (
        <View style={[styles.container, styles.voteContainer]}>
          <View style={[styles.percent, { width: `${percent}%` }]} />
          <Text style={styles.content}>{option.content}</Text>
          <Text style={styles.percentText}>
            {percent}% ({option.userVotes.length})
          </Text>
        </View>
      ) : (
        <Pressable
          onPress={onSelectOption}
          style={[
            styles.container,
            isSelected ? styles.selectedContainer : styles.notSelectedContainer,
          ]}
        >
          <Text style={styles.content}>{option.content}</Text>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
  },
  notSelectedContainer: {
    borderColor: colors.Gray_300,
  },
  selectedContainer: { borderColor: colors.ORANGE_600 },
  content: {
    marginLeft: 10,
  },
  voteContainer: {
    backgroundColor: colors.ORANGE_200,
    borderWidth: 0,
  },
  percent: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 44,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.ORANGE_300,
  },
  percentText: {
    marginRight: 10,
    fontWeight: "500",
  },
});

export default VoteOption;
