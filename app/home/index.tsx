import { fetchUsers } from "@/hooks/api/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지
  });

  console.log(todos);

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
