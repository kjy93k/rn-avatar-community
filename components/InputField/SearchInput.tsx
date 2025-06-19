import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

interface SearchInputProps extends TextInputProps {
  onSubmit?: () => void;
}

const SearchInput = ({ onSubmit, ...props }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholderTextColor={colors.GRAY_500}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        {...props}
      />
      <Ionicons
        name="search"
        size={20}
        onPress={props.onPress ?? onSubmit}
        color={colors.GRAY_500}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.GRAY_100,
    borderRadius: 100,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    paddingLeft: 0,
    color: colors.BLACK,
  },
});

export default SearchInput;
