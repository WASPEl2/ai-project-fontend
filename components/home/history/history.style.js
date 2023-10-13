import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 1,
    marginBottom: 20,
  },
  headerContainer: {
    marginTop: 13,
    marginLeft: 27,
    fontFamily: FONT.bold,
    fontSize: 40,
  },
  headerText: {
    fontFamily: FONT.bold,
    fontSize: 20,
    color: COLORS.secondary,
    textShadowColor: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    opacity: 1.0,
  },
  space: {
    marginLeft: 71,
  },
  cardContainer: {
    // marginLeft: 71,
    flexDirection: "row",
  },
});

export default styles;
