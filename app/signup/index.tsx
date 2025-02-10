import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";

export default function SignupScreen() {
  const router = useRouter();

  // myteam 확인 후 이동
  // T.profile / F.myTeam
  useEffect(() => {
    checkMyTeam();
  }, []);

  const checkMyTeam = () => {
    const res = true;

    if (res) {
      router.push("/signup/profile");
    }
    router.push("/signup/myTeam");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>회원가입</Text>
    </View>
  );
}
