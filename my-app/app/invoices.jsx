import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
const Invoices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invoices</Text>
      <Link href='/' style={styles.link}>
        Home
      </Link>
    </View>
  );
};
export default Invoices;
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
