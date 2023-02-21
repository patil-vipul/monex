import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import AddTransaction from "./screens/AddTransaction";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Splash from "./screens/Splash";
import Transactions from "./screens/Transactions";
import TransactionDetails from "./screens/TransactionDetails";
import Menu from "./screens/Menu";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Budget" component={Menu} />
      <Tab.Screen name="Analytics" component={Transactions} />
      <Tab.Screen name="Profile" component={TransactionDetails} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false, cardStyle: { flex: 1 } }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Tabs}
          />
          <Stack.Screen
            name="AddTransaction"
            options={{ title: "Add Transaction" }}
            component={AddTransaction}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
