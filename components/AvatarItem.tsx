import { baseUrl } from "@/api/axios";
import { colors } from "@/constants";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  PressableProps,
  StyleSheet,
} from "react-native";

interface AvatarItemProps extends PressableProps {
  uri: string;
  isSelected: boolean;
}

function AvatarItem({ uri, isSelected, ...props }: AvatarItemProps) {
  return (
    <Pressable
      {...props}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Image
        source={{
          uri: `${
            Platform.OS === "ios" ? baseUrl.ios : baseUrl.android
          }/${uri}`,
        }}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: Dimensions.get("window").width / 3 - 15,
    height: Dimensions.get("window").width / 3 - 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.GRAY_200,
  },
  selectedContainer: {
    borderColor: colors.ORANGE_600,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default AvatarItem;
