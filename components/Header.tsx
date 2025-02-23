import { useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <Text
      style={{
        color: "#000",
        fontSize: 25,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff0",
        borderBottomColor: "#ffffff0",
      }}
      onPress={() => {
        navigation.goBack();
      }}
    >
      ＜
    </Text>
  );
};

export default Header;
