import "expo-router/entry";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import index from "./app/index";
import homepage from "./components/home";
import Camerapage from "./app/camera";
import ResultPage from "./app/result";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="index" component={index} />
      <Stack.Screen name="home" component={homepage} />
      <Stack.Screen name="camera" component={Camerapage} />
      <Stack.Screen name="result" component={ResultPage} />
    </Stack.Navigator>
  );
}

export default (App) => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
