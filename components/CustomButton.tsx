import { colors } from "@/constants";
import { Text } from "@react-navigation/elements";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface ButtonProps extends PressableProps {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "standard" | "outline" | "filled";
  style?: StyleProp<ViewStyle>;
}

const CustomButton = ({
  label,
  size = "large",
  variant = "filled",
  style = null,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        styles[size],
        styles[variant],
        props.disabled && styles.disabled,
        pressed && styles.pressed,
        style,
      ]}
      {...props}
    >
      <Text style={[styles[`${variant}Text`]]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  small: {
    padding: 8,
    width: 100,
    height: 28,
    fontSize: 12,
  },
  medium: {
    paddingHorizontal: 12,
    alignSelf: "center",
    height: 38,
  },
  large: {
    width: "100%",
    height: 44,
  },
  standard: {
    width: "auto",
    height: "auto",
    padding: 0,
  },
  outline: {
    backgroundColor: colors.WHITE,
    borderColor: colors.ORANGE_600,
    borderWidth: 1,
  },
  filled: {
    backgroundColor: colors.ORANGE_600,
  },
  standardText: { color: colors.ORANGE_600, fontSize: 14, fontWeight: "bold" },
  outlineText: { color: colors.ORANGE_600 },
  filledText: { color: colors.WHITE, fontSize: 14, fontWeight: "bold" },
  pressed: { opacity: 0.7 },
  disabled: {
    backgroundColor: colors.Gray_300,
  },
});

export default CustomButton;
