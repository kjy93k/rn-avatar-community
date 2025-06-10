import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, TextInputProps } from "react-native";
import InputField from ".";

interface PasswordInputProps extends Pick<TextInputProps, "submitBehavior"> {}

const PasswordInput = ({
  submitBehavior = "blurAndSubmit",
}: PasswordInputProps) => {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 8) return "비밀번호는 8자 이상 입력해주세요";
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="비밀번호"
          value={value}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChange}
          error={error?.message}
          textContentType="oneTimeCode"
          submitBehavior={submitBehavior}
          onSubmitEditing={() => setFocus("passwordConfirm")}
          secureTextEntry
          keyboardType="default"
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PasswordInput;
