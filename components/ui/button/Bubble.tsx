import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

const Bubble = ({ children }: { children: string }) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.bubbleCotent}>{children}</Text>
      <View style={styles.bubbletriangle} />
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: "#fff",
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
});

export default Bubble;
