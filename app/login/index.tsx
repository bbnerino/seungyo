import LoginButton from "@/components/ui/button/LoginButton";
import { Layout } from "@/components/ui/layout/Layout";
import { theme } from "@/constants/theme";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

type LoginType = "kakao" | "google" | "apple";

export default function LoginScreen() {
  const router = useRouter();
  const onClick = (type: LoginType) => () => {
    console.log(type);
    if (type === "kakao") {
      router.push("/signup");
    }
    if (type === "google") {
      router.push("/signup");
    }
    if (type === "apple") {
      router.push("/home");
    }
  };

  const lastLogin = "kakao";
  const checkLastLogin = (type: LoginType) => {
    return lastLogin === type;
  };

  return (
    <Layout>
      <Text style={styles.subTitle}>나의 야구 직관 기록 공간</Text>
      <Text style={styles.title}>승요의 일기장</Text>
      <View style={styles.container}>
        <LoginButton
          type="kakao"
          lastLogin={checkLastLogin("kakao")}
          onPress={onClick("kakao")}
        />
        <LoginButton
          type="apple"
          lastLogin={checkLastLogin("apple")}
          onPress={onClick("apple")}
        />
        <LoginButton
          type="google"
          lastLogin={checkLastLogin("google")}
          onPress={onClick("google")}
        />
        <Text style={styles.link}>
          <Link href="https://naver.com">고객센터</Link>
        </Text>
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  subTitle: {
    marginTop: 100,
    fontSize: 16,
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },

  container: {
    flexDirection: "column", // 세로 방향으로 배치
    justifyContent: "center", // 자식들을 세로로 중앙 배치
    alignItems: "center", // 자식들을 가로로 중앙 배치
    width: "100%", // 화면 전체 너비
    gap: 10, // 버튼 간의 간격
    position: "absolute",
    bottom: 45,
  },
  link: {
    marginTop: 22,
    color: theme.color.gray600,
    textDecorationLine: "underline",
  },
});
