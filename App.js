import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import AddTransaction from "./screens/AddTransaction";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator  initialRouteName="AddTransaction" screenOptions={{ headerShown: false, cardStyle: { flex: 1 } }}>
          <Stack.Screen options={{ cardStyle: { flex: 1 } }} name="Home" component={Home} />
          <Stack.Screen name="AddTransaction" component={AddTransaction} />
        </Stack.Navigator>
      </NativeBaseProvider >
    </NavigationContainer>
  );
}