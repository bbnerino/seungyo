import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  children: ReactNode;
  position?: "normal" | "bottom";
};

const Button = ({
  onPress,
  children,
  position = "normal",
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, styles[position], rest.style]}
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
