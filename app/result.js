import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { COLORS, FONT, icons, images } from "../constants";
import Svg, { Circle } from "react-native-svg";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

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
  // const donutColor = ["#79DC78", "#97E47E", "#BFEF88", "#E4F78F", "#FDFC96"];
  const donutColor = ["#7CB650", "#9ACD32", "#FFEF00", "#FFFC4D", "#C9C9C9"];

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

  const handleCardPress = (id) => {
    router.push(`/herbs-details/${id}`);
  };

  return (
    <SafeAreaView style={{ flex: 3, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgba(0, 0, 0, 0)" },
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
          top: 78,
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
            }}
            resizeMode="cover"
          />
          <Svg viewBox={`0 0 ${size} ${size}`}>
            <Circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={donutColor[donutColor.length - 1]}
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
        <View
          style={{
            marginTop: 40,
            width: "100%",
            alignItems: "center",
          }}
        >
          {route.params.responseData.ranking.map((item, index) => (
            <TouchableOpacity onPress={() => handleCardPress(item.herb_id)}>
              <View
                style={{
                  width: "60%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 18,
                  marginBottom: 9,
                  borderBottomWidth: 3,
                  borderBottomColor: COLORS.tertiary,
                  borderStyle: "dotted",
                  alignItems: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      height: 80,
                      width: 80,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View style={{ position: "absolute" }}>
                      <Text style={{ fontFamily: FONT.bold, fontSize: 14 }}>
                        {Math.round(item.probability * 100)}%
                      </Text>
                    </View>
                    <Svg viewBox={`0 0 ${size} ${size}`}>
                      <Circle
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth / 2}
                        stroke={donutColor[donutColor.length - 1]}
                      />
                      <ChartSegment
                        index={index}
                        center={center}
                        radius={radius}
                        strokeWidth={strokeWidth / 2}
                        color={donutColor[index]}
                        circumference={circumference}
                        probability={item.probability}
                        angle={-90}
                      />
                    </Svg>
                  </View>
                  <View style={{ marginLeft: 22 }}>
                    <Text style={{ fontFamily: FONT.bold, color: "#243465" }}>
                      {item.label}
                    </Text>
                    <Text style={{ fontFamily: FONT.bold, color: "#848A9C" }}>
                      ดูเพิ่มเติม
                    </Text>
                  </View>
                </View>

                <Image
                  source={icons.path}
                  resizeMode="cover"
                  style={{ right: -80, width: 8, height: 8 }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultPage;
