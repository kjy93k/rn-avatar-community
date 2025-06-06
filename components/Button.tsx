import { colors } from "@/constants";
import { Text } from "@react-navigation/elements";
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

interface ButtonProps extends PressableProps {
  label: string;
  size: "small" | "medium" | "large";
  variant: "standard" | "outline" | "filled";
}

const Button = ({
  label,
  size = "large",
  variant = "filled",
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        styles[size],
        styles[variant],
      ]}
      {...props}
    >
      <Text style={[styles[variant]]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ORANGE_600,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.ORANGE_600,
  },
  pressed: { opacity: 0.7 },
  small: {
    padding: 8,
    width: 100,
    height: 28,
    fontSize: 12,
  },
  medium: {
    padding: 12,
    width: 150,
    height: 38,
  },
  large: {
    width: "100%",
    height: 44,
  },
  standard: {
    height: "auto",
    padding: 0,
  },
  outline: {
    backgroundColor: colors.WHITE,
    borderColor: colors.ORANGE_600,
    borderWidth: 1,
    color: colors.ORANGE_600,
  },
  filled: {
    backgroundColor: colors.ORANGE_600,
    color: colors.WHITE,
  },
});

export default Button;
