import { colors } from "@/constants";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "./CustomButton";

interface FixedBottomCTAProps {
  label: string;
  onPress: () => void;
}

const FixedBottomCTA = ({ label, onPress, ...props }: FixedBottomCTAProps) => {
  const inset = useSafeAreaInsets();

  return (
    <View style={[styles.fixed, { paddingBottom: inset.bottom || 12 }]}>
      <CustomButton label={label} onPress={onPress} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  fixed: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.Gray_300,
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});
export default FixedBottomCTA;
