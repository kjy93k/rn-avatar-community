import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import InputField from ".";

interface DescriptionInputProps {}

const DescriptionInput = ({}: DescriptionInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name="description"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 5) return "내용을 5자 이상 입력해주세요.";
        },
      }}
      render={({ field: { ref, value, onChange }, fieldState: { error } }) => {
        return (
          <InputField
            ref={ref}
            label="내용"
            placeholder="내용을 입력해주세요."
            returnKeyType="next"
            value={value}
            onChangeText={onChange}
            error={error?.message}
            multiline
          />
        );
      }}
    ></Controller>
  );
};

const styles = StyleSheet.create({});

export default DescriptionInput;
