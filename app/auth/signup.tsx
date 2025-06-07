import FixedBottomCTA from "@/components/FixedBottomCTA";
import InputField from "@/components/InputField";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface signupProps {}

const SignupScreen = ({}: signupProps) => {
  const [signupValues, setSignupValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = () => {
    if (signupValues.email.length === 0) {
      setError((prev) => ({ ...prev, email: "이메일을 입력해주세요" }));
    }
  };

  const handleChangeInput = (value: string, name: string) => {
    setSignupValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <View style={styles.container}>
        <InputField
          label="이메일"
          value={signupValues.email}
          placeholder="이메일을 입력해주세요."
          onChangeText={(value) => handleChangeInput(value, "email")}
          error={error.email}
        />
        <InputField
          label="비밀번호"
          value={signupValues.password}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={(value) => handleChangeInput(value, "password")}
          error={error.password}
        />
        <InputField
          label="비밀번호 확인"
          value={signupValues.passwordConfirm}
          placeholder="비밀번호를 다시 입력해주세요."
          onChangeText={(value) => handleChangeInput(value, "passwordConfirm")}
          error={error.passwordConfirm}
        />
      </View>
      <FixedBottomCTA label="회원가입하기" onPress={handleSubmit} />
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

export default SignupScreen;
