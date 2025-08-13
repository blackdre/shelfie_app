import { StyleSheet, Text, View, Image, useColorScheme } from "react-native";
import Logo from "../assets/adaptive-icon.png";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const Quotations = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>Reading list app</Text>
      <Link href='/' style={styles.link}>
        Home
      </Link>
    </View>
  );
};
export default Quotations;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  link: {
    marginTop: 20,
    color: "blue",
  },
});
