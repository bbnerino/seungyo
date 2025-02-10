import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const LoginButton = ({
  onPress,
  type = "kakao",
}: {
  onPress: () => void;
  type?: "kakao" | "google" | "apple";
}) => {
  return (
    <TouchableOpacity style={[styles.common, styles[type]]} onPress={onPress}>
      <Text style={[textStyles.common, textStyles[type]]}>
        {type} 으로 로그인
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  common: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: "90%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  kakao: {
    backgroundColor: "#FEE500", // 카카오 버튼 색상
  },
  google: {
    backgroundColor: "#4285F4", // 구글 버튼 색상
  },
  apple: {
    backgroundColor: "#000000", // 애플 버튼 색상
  },
});
const textStyles = StyleSheet.create({
  common: { fontSize: 16, fontWeight: "bold" },
  kakao: {
    color: "#000000",
  },
  google: {
    color: "#fff",
  },
  apple: {
    color: "#fff",
  },
});

export default LoginButton;
