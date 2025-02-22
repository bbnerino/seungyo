import { theme } from "@/constants/theme";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({
  onPress,
  children,
  position = "normal",
  disabled,
}: {
  onPress: () => void;
  children: string;
  position?: "normal" | "bottom";
  disabled?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[position],
        disabled && { backgroundColor: theme.color.green200 },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    width: "90%",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.green,
  },
  normal: {},
  bottom: {
    position: "absolute",
    bottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Button;
