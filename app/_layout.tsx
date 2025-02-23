import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { useColorScheme } from "@/hooks/useColorScheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Text } from "react-native";
import Header from "@/components/Header";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  const queryClient = new QueryClient();
  // const navigation = useNavigation();

  return (
    <ActionSheetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "#fff",
              },
              header: () => <Header />,
              // headerLeft: () => <Text onPress={() => {}}>＜</Text>,
            }}
          >
            <Stack.Screen
              name="index"
              // options={{ gestureEnabled: false }} // 해당 화면에서만 뒤로 가기 비활성화
              options={{
                headerShown: true, // 헤더 표시
                title: "프로필", // 헤더 타이틀 설정
              }}
            />
            <Stack.Screen
              name="home/index"
              options={{ gestureEnabled: false }} // 해당 화면에서만 뒤로 가기 비활성화
            />
            <Stack.Screen
              name="signup/profile"
              options={{
                headerShown: true, // 헤더 표시
                title: "프로필", // 헤더 타이틀 설정
              }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </QueryClientProvider>
    </ActionSheetProvider>
  );
}
