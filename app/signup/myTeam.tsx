import Button from "@/components/ui/button/Button";
import SelectTeamButton from "@/components/ui/button/SelectTeamButton";
import { Layout } from "@/components/ui/layout/Layout";
import { baseballTeams } from "@/types/team";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SignupMyTeamScreen() {
  const router = useRouter();
  const [myTeam, setMyTeam] = useState<string>();

  const onClick = (team: string) => {
    setMyTeam(team);
  };

  return (
    <Layout>
      <View style={styles.title_container}>
        <Layout.Title>당신의 최애팀을 선택해주세요.</Layout.Title>
        <Layout.SubTitle>한 팀만 선택해주세요.</Layout.SubTitle>
      </View>
      <View style={styles.container}>
        {baseballTeams.map((team, index) => (
          <SelectTeamButton
            key={team.key}
            onPress={() => onClick(team.key)}
            team={team}
            isSelect={myTeam === team.key}
          />
        ))}
      </View>
      <Button position="bottom" onPress={() => router.push("/signup/profile")}>
        다음으로
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  title_container: {
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 8,
  },
  container: {
    width: 335,
    margin: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: 20,
    marginBottom: 0,
  },
});
