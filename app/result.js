import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { COLORS, icons, images } from "../constants";
import Svg, { Circle } from "react-native-svg";

const ResultPage = ({ size = 20, strokeWidth = 2 }) => {
  const router = useRouter();
  const route = useRoute();
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgba(255, 255, 255, 0)" },
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
          position: "relative",
          width: "100%",
          alignItems: "center",
          justifyContent: "",
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Image
            source={images.isthatherb2}
            resizeMode="contain"
            style={{
              marginTop: 20,
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <Svg
            viewBox={`0 0 ${size} ${size}`}
            style={{
              backgroundColor: "red",
            }}
          >
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
        </View>

        <View>
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
      </View>

      {/* 
      <View
        style={{
          possition: "absolute",
          flex: 1,
          width: "100%",
          alignItems: "center",
          backgroundColor: "red",
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
      </View> */}
    </SafeAreaView>
  );
};

export default ResultPage;
