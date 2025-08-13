import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/adaptive-icon.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
      <Text style={styles.title}>The Number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 10 }}>Reading list app</Text>
      <Link href='/invoices' style={styles.link}>
        Invoices
      </Link>
      <Link href='/quotations' style={styles.link}>
        Quotations
      </Link>
    </View>
  );
};
export default Home;
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
