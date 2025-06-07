import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from ".";

interface PasswordInputProps {}

const PasswordInput = ({}: PasswordInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputField
          label="비밀번호"
          value={value}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChange}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PasswordInput;
