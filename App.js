import React from "react";
import styles from "./styles";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import AddTransaction from "./screens/AddTransaction";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Splash from "./screens/Splash";
import Transactions from "./screens/Transactions";
import TransactionDetails from "./screens/TransactionDetails";
import Menu from "./screens/Menu";
import Profile from "./screens/Profile";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#f0f8ff" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../monex/assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintcolor: focused ? "#2563EB " : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Budget"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../monex/assets/budget.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintcolor: focused ? "#2563EB" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Analytics"
        component={Transactions}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../monex/assets/chart.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintcolor: focused ? "#2563EB" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../monex/assets/profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintcolor: focused ? "#2563EB" : "#748c94",
                }}
              />
            </View>
          ),
        }}
      />
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
          {/* <Stack.Screen
            name="AddTransaction"
            options={{ title: "Add Transaction" }}
            component={AddTransaction}
          /> */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
