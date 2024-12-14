import React from "react";
import { Stack } from "expo-router";

import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import { colors } from "@/styles/theme";
import { Loading } from "@/components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.gray[100],
        },
      }}
    >
      <Stack.Screen
        name="index"
        // options={{ contentStyle: { backgroundColor: colors.green.base } }}
      />
    </Stack>
  );
}
