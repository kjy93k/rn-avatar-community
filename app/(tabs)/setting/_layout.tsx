import { colors } from "@/constants";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.WHITE },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({});
