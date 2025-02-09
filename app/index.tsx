import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("userToken");
    console.log("📸", token);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    if (token) {
      router.push("/home");
    } else {
      router.push({ pathname: "/login" });
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);
  const imageUrl = require("@/assets/images/logo.png");

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={imageUrl}
        style={{ alignSelf: "center", width: 200, height: 200 }}
      />
    </View>
  );
}
