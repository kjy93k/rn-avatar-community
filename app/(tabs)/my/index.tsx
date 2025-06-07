import { router, useFocusEffect } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function MyScreen() {
  useFocusEffect(() => {
    router.replace("/auth");
  });
  return (
    <SafeAreaView>
      <Text>내 프로필 스크린</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
