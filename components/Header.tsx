import { useNavigation } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 56,
        backgroundColor: "#ffffff",
        borderBottomColor: "#ffffff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/icons/arrow_left.png")}
          style={{ width: 48, height: 48 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
