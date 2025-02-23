import { theme } from "@/constants/theme";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

Layout.Title = ({ children }: { children: ReactNode }) => {
  return <Text style={styles.title}>{children}</Text>;
};

Layout.SubTitle = ({ children }: { children: ReactNode }) => {
  return <Text style={{ ...styles.subtitle }}>{children}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.white,
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: 35,
    textAlign: "center",
  },
  subtitle: {
    color: theme.color.gray300,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 21,
    textAlign: "center",
  },
});
