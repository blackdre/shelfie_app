import { Stack } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors } from "../constants/Colors";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value='auto' />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}>
        <Stack.Screen name='index' options={{ title: "Home" }} />
        <Stack.Screen name='invoices' options={{ title: "Invoices" }} />
        <Stack.Screen name='quotations' options={{ title: "Quotations" }} />
      </Stack>
    </>
  );
};
export default RootLayout;
const styles = StyleSheet.create({});
