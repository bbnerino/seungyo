import { fetchLogin } from "@/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchLogin,
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지
  });

  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: createUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["users"]); // 유저 목록 새로고침
  //   },
  // });
  if (isLoading) return <Text>Loading</Text>;
  if (isError) return <Text>데이터를 불러오는 중 오류가 발생했습니다.</Text>;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>홈 페이지</Text>
    </View>
  );
}
