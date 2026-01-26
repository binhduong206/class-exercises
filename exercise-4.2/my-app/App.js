import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: "green" }]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.square, { backgroundColor: "pink" }]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.square, { backgroundColor: "orange" }]}>
        <Text>Square 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  square: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
