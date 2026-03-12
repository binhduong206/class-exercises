import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider, useAppContext } from "./AppContext";
import AuthStack from "./navigation/AuthStack";
import MainStack from "./navigation/MainStack";

const RootNavigator = () => {
  const { isLoggedIn } = useAppContext();
  return isLoggedIn ? <MainStack /> : <AuthStack />;
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
