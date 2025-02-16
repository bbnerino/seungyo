import { theme } from "@/constants/theme";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

Layout.Title = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.Title}>{children}</Text>;
};

Layout.TextM = ({
  children,
  color = theme.color.black,
}: {
  children: ReactNode;
  color?: string;
}) => {
  return <Text style={{ ...styles.TextM, color }}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.white,
  },
  Title: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 35,
    textAlign: "center",
  },
  TextM: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    textAlign: "center",
  },
});
