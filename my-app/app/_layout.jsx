import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
      }}>
      <Stack.Screen name='index' options={{ title: "Home" }} />
      <Stack.Screen name='invoices' options={{ title: "Invoices" }} />
      <Stack.Screen
        name='quotations'
        options={{ title: "Quotations", headerShown: false }}
      />
    </Stack>
  );
};
export default RootLayout;
const styles = StyleSheet.create({});
