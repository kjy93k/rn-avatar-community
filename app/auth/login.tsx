import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { colors } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface loginProps {}

const LoginScreen = ({}: loginProps) => {
  const inset = useSafeAreaInsets();
  return (
    <>
      <View style={styles.container}>
        <InputField label="Email" placeholder="이메일을 입력해주세요." />
        <InputField label="Password" placeholder="비밀번호를 입력해주세요." />
      </View>
      <View style={[styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
        <CustomButton label="로그인하기" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
  fixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.Gray_300,
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});

export default LoginScreen;
