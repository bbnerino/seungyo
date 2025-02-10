import Button from "@/components/ui/button/Button";
import { baseballTeams } from "@/types/team";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SignupMyTeamScreen() {
  const [myTeam, setMyTeam] = useState<string>();

  const onClick = (team: string) => {
    setMyTeam(team);
  };

  const isSelect = (team: string) => {
    return myTeam === team ? "selected" : "normal";
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>당신의 최애팀을 선택해주세요.</Text>
      <View style={styles.container}>
        {baseballTeams.map((team) => (
          <TouchableOpacity
            onPress={() => onClick(team.key)}
            key={team.key}
            activeOpacity={1}
            style={[styles.team]}
          >
            <Image
              source={team.character}
              style={[styles.teamImage, styles[isSelect(team.key)]]}
            />
            <Text>{team.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Button position="bottom" onPress={() => {}}>
        다음으로
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  team: {
    margin: 10,
    alignItems: "center",
    width: 100,
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },
  teamImage: {
    width: 50,
    height: 50,
  },
  selected: {
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 25,
  },
  normal: {},
});
