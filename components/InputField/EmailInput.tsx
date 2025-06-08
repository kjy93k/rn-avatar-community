import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from ".";

interface EmailInputProps {}

const EmailInput = ({}: EmailInputProps) => {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) return "이메일을 입력해주세요.";
          if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data))
            return "올바른 이메일 형식이 아닙니다.";
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          autoFocus
          label="이메일"
          value={value}
          placeholder="이메일을 입력해주세요."
          returnKeyType="next"
          submitBehavior="submit"
          onSubmitEditing={() => setFocus("password")}
          onChangeText={onChange}
          error={error?.message}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default EmailInput;
