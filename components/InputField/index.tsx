import { colors } from "@/constants";
import React from "react";
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
}

const InputField = ({
  label,
  variant = "filled",
  error,
  ...props
}: InputFieldProps) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.container,
          styles[variant],
          Boolean(error) && styles.inputError,
        ]}
      >
        <TextInput
          placeholderTextColor={colors.Gray_500}
          style={styles.input}
          {...props}
        />
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
  filled: { backgroundColor: colors.Gray_100 },
  standard: {},
  outline: {},
});

export default InputField;
