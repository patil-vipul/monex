import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import AddTransaction from "./screens/AddTransaction";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Splash from "./screens/Splash"
import Menu from "./screens/Menu";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false, cardStyle: { flex: 1 } }}
        >
          <Stack.Screen
            options={{ cardStyle: { flex: 1 } }}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
