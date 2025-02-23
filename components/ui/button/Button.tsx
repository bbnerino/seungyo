import { theme } from "@/constants/theme";
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
  disabled?: boolean;
};

const Button = ({
  onPress,
  children,
  position = "normal",
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button, styles[position], rest.style]}
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
