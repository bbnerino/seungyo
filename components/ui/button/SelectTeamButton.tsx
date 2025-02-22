import { MyTeam } from "@/types/team";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
  team: MyTeam;
  isSelect: boolean;
}

const SelectTeamButton = ({ team, onPress, isSelect }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={[styles.team]}>
      {/* 기본 팀 이미지 */}
      <Image source={team.character} style={styles.teamImage} />

      {/* 선택된 경우 오버레이 이미지 추가 */}
      {isSelect && (
        <Image
          source={require("@/assets/images/character/selected.png")}
          style={styles.overlayImage}
        />
      )}

      <Text>{team.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  team: {
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    position: "relative",
    margin: 10,
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

export default SelectTeamButton;
