import { Stack, useGlobalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useWordList } from "../provider/useWordsList";

export default function learn() {
  const { word_id } = useGlobalSearchParams();

  const { words } = useWordList();

  if (typeof word_id === "string") {
    return (
      <>
        <Stack.Screen options={{ headerShown: true }} />
        <View>
          <Text>learn?word_id={word_id}</Text>
          <Text>{JSON.stringify(words[word_id])}</Text>
        </View>
      </>
    );
  }
}
