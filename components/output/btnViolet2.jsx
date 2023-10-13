import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.retakePhoto}>Retake photo</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 11,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(247,230,128,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 15,
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  retakePhoto: {
    color: "rgba(238,173,60,1)",
    fontSize: 15,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default MaterialButtonViolet2;
