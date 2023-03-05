import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import AddTransaction from "./screens/AddTransaction";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Splash from "./screens/Splash";
import Transactions from "./screens/Transactions";
import TransactionDetails from "./screens/TransactionDetails";
import MenuDiscarded from "./screens/MenuDiscarded";
import Menu from "./screens/Menu";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  barStyle:{
    backgroundColor: '#fff',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity:  0.17,
    shadowRadius: 5,
    elevation: 2
  },
  focusedBottomIcon:{
    color: '#2563EB'
  },
  unfocusedBottomIcon:{
    color: '#929292'
  }
});

const HomeTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Menu" barStyle={styles.barStyle} >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({ focused }) => (<MaterialIcons style={[focused?styles.focusedBottomIcon:styles.unfocusedBottomIcon,]} size={24} name="home"/>),}} />
      <Tab.Screen name="Budget" component={MenuDiscarded} options={{tabBarIcon: ({ focused }) => (<MaterialIcons style={[focused?styles.focusedBottomIcon:styles.unfocusedBottomIcon,]} size={24} name="payment"/>),}} />
      <Tab.Screen name="Analytics" component={Transactions} options={{tabBarIcon: ({ focused }) => (<MaterialIcons style={[focused?styles.focusedBottomIcon:styles.unfocusedBottomIcon,]} size={24} name="analytics"/>),}} />
      <Tab.Screen name="Menu" component={Menu} options={{tabBarIcon: ({ focused }) => (<MaterialIcons style={[focused?styles.focusedBottomIcon:styles.unfocusedBottomIcon,]} size={24} name="menu"/>),}} />
    </Tab.Navigator>
  );
};



export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false, cardStyle: { flex: 1 } }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="AddTransaction" component={AddTransaction}/>
          <Stack.Screen name="Transactions" component={Transactions}/>
          <Stack.Screen name="TransactionDetails" component={TransactionDetails}/>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}


