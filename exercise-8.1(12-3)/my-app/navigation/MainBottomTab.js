import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Platform } from "react-native";
import HomeScreen from "../screens/main/HomeScreen";
import ProfileScreen from "../screens/main/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabIcon = ({ emoji, focused }) => (
  <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
);

const MainBottomTab = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#FFFFFF",
        borderTopColor: "#EEEEEE",
        paddingBottom: Platform.OS === "ios" ? 20 : 8,
        paddingTop: 8,
        height: Platform.OS === "ios" ? 80 : 60,
      },
      tabBarActiveTintColor: "#F5A623",
      tabBarInactiveTintColor: "#AAAAAA",
      tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
    }}
  >
    <Tab.Screen
      name="Explorer"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => <TabIcon emoji="🍺" focused={focused} />,
      }}
    />
    <Tab.Screen
      name="Account"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused }) => <TabIcon emoji="👤" focused={focused} />,
      }}
    />
  </Tab.Navigator>
);

export default MainBottomTab;
