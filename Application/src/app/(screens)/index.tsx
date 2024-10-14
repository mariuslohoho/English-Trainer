import { router, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import EButton from "../../components/EButton";

export default function Index() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Home",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <EButton
          title="Start"
          onPress={() => {
            router.push({
              pathname: "/learn",
              params: {
                word_id: "9614b083-e317-456b-ac51-0246d6141081",
              },
            });
          }}
        />
      </View>
    </>
  );
}
