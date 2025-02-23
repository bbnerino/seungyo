import Button from "@/components/ui/button/Button";
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
        <Layout.TextM color="#B3B6B6">한 팀만 선택해주세요.</Layout.TextM>
      </View>
      <View style={styles.container}>
        {baseballTeams.map((team, index) => (
          <TouchableOpacity
            onPress={() => onClick(team.key)}
            key={team.key}
            activeOpacity={1}
            style={[
              styles.team,
              index >= Math.floor(baseballTeams.length / 3) * 3
                ? styles.lastRowItem
                : {},
            ]}
          >
            {/* 기본 팀 이미지 */}
            <Image source={team.character} style={styles.teamImage} />

            {/* 선택된 경우 오버레이 이미지 추가 */}
            {myTeam === team.key && (
              <Image
                source={require("@/assets/images/character/selected.png")}
                style={styles.overlayImage}
              />
            )}

            <Text>{team.name}</Text>
          </TouchableOpacity>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    padding: 20,
    gap: 20,
  },
  team: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    position: "relative",
  },
  lastRowItem: {
    alignSelf: "flex-start", // 마지막 줄 왼쪽 정렬
  },

  teamImage: {
    width: 60,
    height: 60,
  },
  overlayImage: {
    width: 60,
    height: 60,
    position: "absolute", // 기존 이미지 위에 배치
    top: 0,
    left: 15,
  },
});
