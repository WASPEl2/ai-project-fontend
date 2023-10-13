import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import MaterialButtonViolet2 from "./MaterialButtonViolet2";
import MaterialButtonViolet from "./MaterialButtonViolet";

import { images } from "../../constants";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.materialButtonVioletRow}>
        <MaterialButtonViolet2
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet2>
        <MaterialButtonViolet
          style={styles.materialButtonViolet}
        ></MaterialButtonViolet>
      </View>
      <Image
        source={images.mock}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Text style={styles.isThatHerb}>IS THAT HERB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonViolet: {
    height: 36,
    width: 100,
    marginLeft: 86
  },
  materialButtonVioletRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 491,
    marginLeft: 42,
    marginRight: 42
  },
  image: {
    width: 306,
    height: 339,
    marginTop: -380,
    marginLeft: 42
  },
  isThatHerb: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 64,
    width: 261,
    fontSize: 40,
    marginTop: -437,
    marginLeft: 64
  }
});

export default Untitled;
