import { theme } from "@/constants/theme";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image, View } from "react-native";
import Bubble from "./Bubble";

const LoginButton = ({
  onPress,
  type = "kakao",
  lastLogin,
}: {
  onPress: () => void;
  type?: "kakao" | "google" | "apple";
  lastLogin: boolean;
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
      {lastLogin && <Bubble>최근 로그인</Bubble>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  common: {
    paddingVertical: 12,
    width: "90%",
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    height: 48,
    position: "relative",
  },
  bubble: {
    position: "absolute",
    top: -20,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  bubbleCotent: {
    width: 84,
    height: 25,
    borderRadius: 100,
    backgroundColor: "#02C37DE3",
    fontSize: 13,
    lineHeight: 25,
    fontWeight: "bold",
    color: theme.color.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  bubbletriangle: {
    left: "40%",
    top: -2,
    width: 0,
    borderStyle: "solid",

    borderWidth: 10,
    borderColor: "transparent",
    borderBottomWidth: 0,
    borderTopColor: "#02C37DE3",
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
    lineHeight: 24,
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
