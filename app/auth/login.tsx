import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import React from "react";
import { StyleSheet, View } from "react-native";

interface loginProps {}

const LoginScreen = ({}: loginProps) => {
  return (
    <>
      <View style={styles.container}>
        <InputField label="Email" placeholder="이메일을 입력해주세요." />
        <InputField label="Password" placeholder="비밀번호를 입력해주세요." />
      </View>
      <FixedBottomCTA label="로그인하기" onPress={() => {}} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});

export default LoginScreen;
