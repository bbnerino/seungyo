import LoginButton from "@/components/ui/button/LoginButton";
import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const onClick = (type: "kakao" | "google" | "apple") => {
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

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.subTitle}>나의 야구 직관 기록 공간</Text>
      <Text style={styles.title}>승요의 일기장</Text>
      <View style={styles.container}>
        <LoginButton
          type="kakao"
          onPress={() => {
            onClick("kakao");
          }}
        />
        <LoginButton
          type="apple"
          onPress={() => {
            onClick("apple");
          }}
        />
        <LoginButton
          type="google"
          onPress={() => {
            onClick("google");
          }}
        />
      </View>
      <Text style={styles.link}>
        <Link href="https://naver.com">고객센터</Link>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subTitle: {
    fontSize: 16,
    color: "#333",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  link: {
    marginTop: 10,
    color: "#BABCBE",
    textDecorationLine: "underline",
  },
  container: {
    flex: 0.3,
    flexDirection: "column", // 세로 방향으로 배치
    justifyContent: "center", // 자식들을 세로로 중앙 배치
    alignItems: "center", // 자식들을 가로로 중앙 배치
    width: "100%", // 화면 전체 너비
    // paddingHorizontal: 24,
    gap: 10, // 버튼 간의 간격
  },
});
