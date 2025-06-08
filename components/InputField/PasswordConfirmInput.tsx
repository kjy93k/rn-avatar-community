import React from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from ".";

interface PasswordConfirmInputProps {}

const PasswordConfirmInput = ({}: PasswordConfirmInputProps) => {
  const { control, setFocus } = useFormContext();
  const password = useWatch({ control, name: "password" });

  return (
    <Controller
      name="passwordConfirm"
      control={control}
      rules={{
        validate: (data: string) => {
          if (password !== data) return "비밀번호가 일치하지 않습니다";
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="비밀번호 확인"
          value={value}
          placeholder="비밀번호를 다시 입력해주세요."
          onChangeText={onChange}
          secureTextEntry
          textContentType="oneTimeCode"
          error={error?.message}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PasswordConfirmInput;
