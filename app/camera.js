import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/camera/button";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Camerapage() {
  const navigation = useNavigation();
  const router = useRouter();

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Camera is not initialized or running");
    }
  };

  const pickImage = async () => {
    try {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!data.cancelled) {
        setImage(data.assets[0].uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendPicture = async () => {
    if (image) {
      try {
        const base64ImageData = image;
        const blob = new Blob([base64ImageData], { type: "image/jpg" });

        const formdata = new FormData();
        formdata.append("image", blob, "image.jpg");

        const response = await axios.post(
          "http://192.168.1.250:5000/api/herbs/predict",

          formdata
        );

        if (response.status !== 200) {
          console.error("Network request failed with status:", response.status);
          return;
        }

        const data = response.data;
        navigation.navigate("result", {
          responseData: data,
        });
      } catch (error) {
        console.error("Error123:", error.response);
      }
    } else {
      console.log("Image is null, cannot send");
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {image ? (
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
      ) : (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
      )}
      {!image ? (
        <View style={styles.container}>
          <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef}
            flashMode={flash}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 8,
                paddingHorizontal: 30,
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
            >
              <Button
                title=""
                icon="retweet"
                onPress={() => {
                  setType(
                    type === CameraType.back
                      ? CameraType.front
                      : CameraType.back
                  );
                }}
              />
              <Button
                onPress={() =>
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  )
                }
                icon="flash"
                color={
                  flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"
                }
              />
            </View>
          </Camera>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 50,
              marginTop: 16,
              backgroundColor: "rgba(0,0,0,1)",
            }}
          >
            <Button onPress={pickImage} icon="image" />
            <Button onPress={takePicture} icon="camera" />
          </View>
        </View>
      ) : (
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
          <Image
            source={{ uri: image }}
            style={{ width: 309, height: 340, marginTop: 18 }}
            resizeMode="cover"
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingHorizontal: 50,
              marginTop: 19,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: COLORS.tertiary,
                borderRadius: 20,
                paddingRight: 10,
              }}
            >
              <Button
                title="Retake photo"
                onPress={() => setImage(null)}
                style={styles.textresult}
                color={COLORS.secondary}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                backgroundColor: COLORS.tertiary,
                borderRadius: 20,
                paddingRight: 10,
              }}
            >
              <Button
                title="next"
                onPress={sendPicture}
                color={COLORS.secondary}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 0,
  },
  controls: {
    flex: 0.5,
    backgroundColor: "black",
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});
