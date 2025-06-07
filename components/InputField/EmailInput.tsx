import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from ".";

interface EmailInputProps {}

const EmailInput = ({}: EmailInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name="email"
      control={control}
      render={({ field: { onChange, value } }) => (
        <InputField
          label="이메일"
          value={value}
          placeholder="이메일을 입력해주세요."
          onChangeText={onChange}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default EmailInput;
