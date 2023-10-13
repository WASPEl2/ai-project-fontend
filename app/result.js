import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { COLORS, icons, images } from "../constants";
import Svg, { Circle } from "react-native-svg";

const ResultPage = ({ size = 200, strokeWidth = 20 }) => {
  const router = useRouter();
  const route = useRoute();
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: "rgba(255, 255, 255, 0)" },
          headerTransparent: true,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.home}
              dimension="60%"
              handlePress={() => router.push("home")}
            />
          ),
          headerTitle: "",
        }}
      />

      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <Image
          source={images.isthatherb2}
          resizeMode="contain"
          style={{
            marginTop: 78,
          }}
        />
        <Svg viewBox={`0 0 ${size} ${size}`} style={{}}>
          <Circle
            // key={index}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            stroke="blue"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - 0.5)}
          />
        </Svg>
        <Text>
          Ranking:
          {route.params.responseData.ranking.map((item) => (
            <View key={item.label}>
              <Text>Label: {item.label}</Text>
              <Text>Probability: {item.probability}</Text>
            </View>
          ))}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ResultPage;
