import { colors } from "@/constants";
import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface TabProps {
  isActive: boolean;
  onPress?: () => void;
  children: ReactNode;
}

const Tab = ({ isActive, onPress, children }: TabProps) => {
  return (
    <Pressable
      style={[styles.container, isActive && styles.activeContainer]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles.activeText]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    flex: 1,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colors.WHITE,
  },
  activeContainer: {
    borderBottomColor: colors.BLACK,
  },
  text: { fontSize: 14, color: colors.Gray_500 },
  activeText: {
    color: colors.BLACK,
    fontWeight: 700,
  },
});

export default Tab;
