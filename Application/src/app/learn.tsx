import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function learn() {
  const { word_id } = useGlobalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <View>
        <Text>learn?word_id={word_id}</Text>
      </View>
    </>
  );
}
