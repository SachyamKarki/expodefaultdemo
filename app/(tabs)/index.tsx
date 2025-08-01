import { Link } from "expo-router";
import { StyleSheet, Text, View, } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit expo</Text>
      <Link href="/about" style={styles.button}>
        <Text style={styles.text}>Go to About</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(10, 10, 10)",
  },
  text: {
    color: "white",
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 6,
  },
});
