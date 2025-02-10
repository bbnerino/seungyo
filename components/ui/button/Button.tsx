import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({
  onPress,
  children,
  position = "normal",
}: {
  onPress: () => void;
  children: string;
  position?: "normal" | "bottom";
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[position]]}
      onPress={onPress}
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
    backgroundColor: "#02C37D",
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
