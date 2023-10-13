import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.next}>Next</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(247,230,128,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  next: {
    color: "rgba(238,173,60,1)",
    fontSize: 14,
    alignSelf: "center"
  }
});

export default MaterialButtonViolet;
