import React from "react";
import styles from "./styles";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
    <Tab.Navigator
      tabBarStyle={styles.shadow}
      screenOptions={{
        showLabel: false,

        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
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
              <Text
                style={{ color: focused ? "#2563EB" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
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
                top: 10,
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
              <Text
                style={{ color: focused ? "#2563EB" : "#748c94", fontSize: 12 }}
              >
                Budget
              </Text>
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
                top: 10,
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
              <Text
                style={{ color: focused ? "#2563EB" : "#748c94", fontSize: 12 }}
              >
                Analytics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TransactionDetails}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
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
              <Text
                style={{ color: focused ? "#2563EB" : "#748c94", fontSize: 12 }}
              >
                Profile
              </Text>
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
