import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={squareStyle.container}>
        <Text>Hello, world!</Text>
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
  },
});

const squareStyle = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: "#42f566",
    alignItems: "center",
    justifyContent: "center",
  },
});
