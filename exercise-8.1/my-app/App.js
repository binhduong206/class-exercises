import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import LoginScreen from "./Screens/login";
import HomeScreen from "./Screens/home_screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: "Home",
              headerLeft: () => null, // ẩn nút back mặc định
              headerBackVisible: false,
              // Dùng nút back tùy chỉnh qua headerLeft
              headerLeft: () => (
                <BackButton onPress={() => navigation.replace("Login")} />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// Component nút back với icon <
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function BackButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.backBtn}>
      <Text style={styles.backIcon}>‹</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 32,
    color: "#6C63FF",
    lineHeight: 36,
    fontWeight: "300",   
  },
});
