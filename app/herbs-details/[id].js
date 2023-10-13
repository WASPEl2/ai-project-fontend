import React from "react";
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Image,
  Dimensions,
  RefreshControl,
  FlatList,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import useFetch from "../../hook/useFetch";
import { COLORS, icons, images } from "../../constants";
import styles from "./id.style";
import { ScreenHeaderBtn } from "../../components";

const herbDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { width, height } = Dimensions.get("window");
  const imageWidth = 1.5 * width;
  const imageHeight = 0.8 * height;

  const { data, isLoading, error, refetch } = useFetch(`id/${params.id}`);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);
  console.log(data[0]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refershing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.white} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={styles.container}>
            <View style={styles.bgcontainer(imageWidth, imageHeight)}></View>
            <View style={styles.textContainer}>
              <Image
                source={images[`title${data[0].herb_id}`]}
                resizeMode="cover"
                style={styles.title}
              />
              <Image
                source={images[`image${data[0].herb_id}`]}
                resizeMode="contain"
                style={styles.image}
              />
              <View style={styles.generalContainer}>
                <Text style={styles.text}>{data[0].herb_description}</Text>
                <Text style={styles.text}>
                  <Text style={styles.orangeBoldText}>ชื่อสามัญ</Text> :{" "}
                  {data[0].herb_en_name}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.orangeBoldText}>ชื่อวิทยาศาสตร์</Text> :{" "}
                  {data[0].herb_scientific_name}
                </Text>
                <Text style={styles.text}>
                  <Text style={styles.orangeBoldText}>วงศ์</Text> :{" "}
                  {data[0].herb_family}
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.characteristicsContainer}>
                <FlatList
                  data={data[0].herb_characteristics}
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.characteristicsIcon}>
                        <Image
                          source={{
                            uri: item.character_icon,
                          }}
                          resizeMode="cover"
                          style={{ width: "60%", height: "60%" }}
                        />
                      </View>

                      <View style={styles.textWrapper}>
                        <Text style={styles.boldText}>
                          {item.character_name}
                        </Text>
                        <Text style={styles.text}>
                          {item.character_description}
                        </Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item) => item.character_name}
                  contentContainerStyle={{ marginVertical: 10, rowGap: 16 }}
                  showsVerticalScrollIndicator={false}
                  Vertical
                />
              </View>
              <View style={styles.propertiesContainer}>
                <FlatList
                  data={data[0].properties}
                  renderItem={({ item }) => (
                    <View style={{ flexDirection: "row" }}>
                      <View style={styles.propertiesticsIcon}>
                        <Image
                          source={{
                            uri: item.property_icon,
                          }}
                          resizeMode="cover"
                          style={{ width: "60%", height: "60%" }}
                        />
                      </View>
                      <View style={styles.textWrapper}>
                        <Text style={styles.boldText}>
                          {item.property_name}
                        </Text>
                        <Text style={styles.text}>
                          {item.property_description}
                        </Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={(item) => item.property_name}
                  contentContainerStyle={{ marginVertical: 10, rowGap: 16 }}
                  showsVerticalScrollIndicator={false}
                  Vertical
                />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default herbDetails;
