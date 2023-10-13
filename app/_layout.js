import { Stack } from "expo-router";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    mn_kimchi_new: require("../assets/fonts/MN_KIMCHI_NEW.ttf"),
    mn_kimchi_new_bold: require("../assets/fonts/MN_KIMCHI_NEW_Bold.ttf"),
    mn_kimchi_new_italic: require("../assets/fonts/MN_KIMCHI_NEW_Italic.ttf"),
    mn_kimchi_new_bold_italic: require("../assets/fonts/MN_KIMCHI_NEW_Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="home">
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default Layout;
