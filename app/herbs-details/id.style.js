import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    backgroundColor: COLORS.white,
  },
  bgcontainer: (bgwidth, bgheight) => ({
    position: "absolute",
    width: bgwidth,
    height: bgheight,
    backgroundColor: COLORS.primary,
    borderRadius: bgwidth / 2,
    left: "50%",
    top: "0%",
    marginLeft: -bgwidth / 2,
    marginTop: -bgheight / 2,
  }),
  textContainer: {
    marginTop: 110,
    alignItems: "center",
    marginLeft: 29,
    marginRight: 20,
  },
  image: {
    marginTop: 16,
    width: 200,
    height: 200,
  },
  generalContainer: {
    marginTop: 16,
    marginBottom: 10,
  },
  textWrapper: {
    width: "80%",
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: 12,
  },
  boldText: {
    fontFamily: FONT.bold,
    fontSize: 13,
  },
  orangeBoldText: {
    fontFamily: FONT.bold,
    fontSize: 13,
    color: COLORS.secondary,
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: 13,
  },
  characteristicsContainer: {
    backgroundColor: COLORS.primary,
    paddingLeft: 29,
    paddingRight: 20,
  },
  characteristicsIcon: {
    width: 33,
    height: 33,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.green_apple,
    borderRadius: 6,
    marginRight: 10,
  },
  propertiesContainer: {
    backgroundColor: COLORS.wheat,
    paddingLeft: 29,
    paddingRight: 20,
  },
  propertiesticsIcon: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: 35 / 2,
    marginRight: 10,
  },
});

export default styles;
