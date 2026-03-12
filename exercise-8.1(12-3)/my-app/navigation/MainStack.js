import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainBottomTab from "./MainBottomTab";
// Thêm các màn hình chức năng khác vào đây khi cần
// import FoodDetailScreen from "../screens/main/FoodDetailScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTab" component={MainBottomTab} />
    {/* <Stack.Screen name="FoodDetail" component={FoodDetailScreen} /> */}
  </Stack.Navigator>
);

export default MainStack;
