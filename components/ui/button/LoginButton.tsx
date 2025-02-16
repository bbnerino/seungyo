import { theme } from "@/constants/theme";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";

const LoginButton = ({
  onPress,
  type = "kakao",
}: {
  onPress: () => void;
  type?: "kakao" | "google" | "apple";
}) => {
  const logos = {
    kakao: require("@/assets/images/button/logo_kakao.png"),
    apple: require("@/assets/images/button/logo_apple.png"),
    google: require("@/assets/images/button/logo_google.png"),
  };

  return (
    <TouchableOpacity style={[styles.common, styles[type]]} onPress={onPress}>
      <Image style={styles.logo} source={logos[type]} />
      <Text style={[textStyles.common, textStyles[type]]}>
        {type} 으로 로그인
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  common: {
    paddingVertical: 12,
    width: "90%",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  kakao: {
    backgroundColor: "#FAE366", // 카카오 버튼 색상
  },
  apple: {
    backgroundColor: theme.color.black,
  },
  google: {
    backgroundColor: theme.color.gray50,
  },
});
const textStyles = StyleSheet.create({
  common: {
    fontSize: 16,
    fontWeight: "bold",
  },
  kakao: {
    color: theme.color.black,
  },
  apple: {
    color: theme.color.white,
  },
  google: {
    color: theme.color.black,
  },
});

export default LoginButton;
