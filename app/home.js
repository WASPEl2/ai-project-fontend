import React, { useState, useEffect, useRef } from "react";
import { Animated, SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons } from "../constants";
import { Welcome, History, Herbs } from "../components";
import SplashScreen from "../components/sp/sp";
import Homepage from "../components/home";

const Home = () => {
  if (__DEV__) {
    console.error = (error) => {};
  }

  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Delay for the splash screen
    setTimeout(() => {
      setShowSplash(false);
    }, 2800); // Adjust the delay as needed
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.primary, height: "100%" }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {showSplash ? <SplashScreen /> : <Homepage />}
    </SafeAreaView>
  );
};

export default Home;
