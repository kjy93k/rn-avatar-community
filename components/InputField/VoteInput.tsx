import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Pressable, StyleSheet } from "react-native";
import InputField from ".";

interface VoteInputProps {
  index: number;
  onRemove: () => void;
}

const VoteInput = ({ index, onRemove }: VoteInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={`voteOptions.${index}.content`}
      rules={{
        validate: (data: string) => {
          if (data.length === 0) {
            return "내용을 입력해주세요.";
          }
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <InputField
          value={value}
          onChangeText={onChange}
          placeholder="투표명을 입력해주세요."
          variant="standard"
          error={error?.message}
          rightChild={
            <Pressable onPress={onRemove}>
              <Ionicons name="close" size={20} color={colors.BLACK} />
            </Pressable>
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default VoteInput;
