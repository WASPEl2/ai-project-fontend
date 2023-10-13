import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { COLORS, icons, images } from "../constants";
import Svg, { Circle } from "react-native-svg";
import { Dimensions } from "react-native";

const ChartSegment = ({
  index,
  center,
  radius,
  strokeWidth,
  color,
  circumference,
  probability,
  angle,
}) => {
  return (
    <Circle
      key={index}
      cx={center}
      cy={center}
      r={radius}
      strokeWidth={strokeWidth}
      stroke={color}
      strokeDasharray={circumference}
      strokeDashoffset={circumference * (1 - probability)}
      originX={center}
      originY={center}
      rotation={angle}
    />
  );
};

const ResultPage = ({ size = 200, strokeWidth = 35 }) => {
  const router = useRouter();
  const route = useRoute();
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const { height, width } = Dimensions.get("window");
  const donutColor = [
    "rgba(85, 183, 116, 1)",
    "rgba(224, 246, 207, 0.6)",
    "rgba(159, 209, 121, 1)",
    "rgba(85, 183, 116, 0.6)",
    "rgba(85, 183, 116, 0.47)",
    "rgba(247, 230, 128, 1)",
  ];

  const [startAngles, setStartAngles] = useState([]);
  const [data, setData] = useState([]);

  const refresh = () => {
    const rankingData = route.params.responseData.ranking;
    let angle = 0;
    const angles = [];
    rankingData.forEach((item) => {
      angles.push(angle);
      angle += item.probability * 360;
    });

    setData(rankingData);
    setStartAngles(angles);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
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
          flex: 3,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "relative",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image source={images.isthatherb2} resizeMode="contain" />
        </View>
        <View
          style={{
            position: "relative",
            width: width / 2,
            height: width / 2,
            alignItems: "center",
            marginTop: 25,
            // backgroundColor: "black",
          }}
        >
          <Image
            source={{ uri: route.params.image }}
            style={{
              position: "absolute",
              width: "60%",
              height: "60%",
              margin: "20%",
              borderRadius: 1000,
              // borderWidth: 2,
            }}
            resizeMode="cover"
          />
          <Svg viewBox={`0 0 ${size} ${size}`}>
            <Circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={donutColor[5]}
            />
            {route.params.responseData.ranking.map((item, index) => (
              <ChartSegment
                index={index}
                center={center}
                radius={radius}
                strokeWidth={strokeWidth}
                color={donutColor[index]}
                circumference={circumference}
                probability={item.probability}
                angle={startAngles[index] - 90}
              />
            ))}
          </Svg>
        </View>
        <View>
          <Text>Ranking:</Text>
          <Text>
            {route.params.responseData.ranking.map((item) => (
              <View key={item.label}>
                <Text>Label: {item.label}</Text>
                <Text>Probability: {item.probability}</Text>
              </View>
            ))}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultPage;
