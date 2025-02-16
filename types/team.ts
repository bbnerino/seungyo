export interface MyTeam {
  name: string;
  character: string;
}

export const baseballTeams = [
  {
    name: "롯데 자이언츠",
    character: require("@/assets/images/character/giants.png"),
    key: "giants",
  },
  {
    name: "삼성 라이온즈",
    character: require("@/assets/images/character/lions.png"),
    key: "lions",
  },
  {
    name: "LG 트윈스",
    character: require("@/assets/images/character/twins.png"),
    key: "twins",
  },
  {
    name: "두산 베어스",
    character: require("@/assets/images/character/bears.png"),
    key: "bears",
  },
  {
    name: "KIA 타이거즈",
    character: require("@/assets/images/character/tigers.png"),
    key: "tigers",
  },
  {
    name: "키움 히어로즈",
    character: require("@/assets/images/character/heros.png"),
    key: "heroes",
  },
  {
    name: "한화 이글스",
    character: require("@/assets/images/character/eagles.png"),
    key: "eagles",
  },
  {
    name: "SSG 랜더스",
    character: require("@/assets/images/character/landers.png"),
    key: "landers",
  },
  {
    name: "NC 다이노스",
    character: require("@/assets/images/character/dinos.png"),
    key: "dinos",
  },
  {
    name: "KT 위즈",
    character: require("@/assets/images/character/wiz.png"),
    key: "wiz",
  },
];
