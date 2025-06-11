import { colors } from "@/constants";
import React, { ForwardedRef, forwardRef, ReactNode } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputFieldProps extends TextInputProps {
  label?: string;
  variant?: "filled" | "standard" | "outline";
  error?: string;
  rightChild?: ReactNode;
}

const InputField = (
  {
    label,
    variant = "filled",
    error,
    rightChild = null,
    ...props
  }: InputFieldProps,
  ref?: ForwardedRef<TextInput>
) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          Boolean(error) && styles.inputError,
          props.multiline && styles.multiline,
        ]}
      >
        <TextInput
          ref={ref}
          placeholderTextColor={colors.Gray_500}
          inputMode="email"
          autoCapitalize="none"
          autoCorrect
          style={[styles.input, styles[`${variant}Text`]]}
          {...props}
        />
        {rightChild}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 12,
    color: colors.Gray_700,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 0,
    flex: 1,
  },
  inputError: {
    backgroundColor: colors.RED_100,
  },
  error: {
    fontSize: 12,
    marginTop: 5,
    color: colors.RED_500,
  },
  multiline: {
    alignItems: "flex-start",
    paddingVertical: 10,
    height: 200,
  },
  filled: { backgroundColor: colors.Gray_100 },
  standard: {
    borderWidth: 1,
    borderColor: colors.Gray_200,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.ORANGE_600,
  },
  filledText: {
    color: colors.BLACK,
  },
  standardText: {
    color: colors.BLACK,
  },
  outlineText: {
    color: colors.ORANGE_600,
    fontWeight: "bold",
  },
});

export default forwardRef(InputField);
