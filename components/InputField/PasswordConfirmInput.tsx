import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from ".";

interface PasswordConfirmInputProps {}

const PasswordConfirmInput = ({}: PasswordConfirmInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name="passwordConfirm"
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputField
          label="비밀번호 확인"
          value={value}
          placeholder="비밀번호를 다시 입력해주세요."
          onChangeText={onChange}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PasswordConfirmInput;
