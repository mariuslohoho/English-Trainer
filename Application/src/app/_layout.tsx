import { Stack } from "expo-router";
import WorldListProvider from "../provider/useWordsList";

export default function RootLayout() {
  return (
    <WorldListProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(screen)" />
      </Stack>
    </WorldListProvider>
  );
}
