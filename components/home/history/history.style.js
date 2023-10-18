import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    width: "100%",
    marginTop: 1,
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 13,
    marginHorizontal: 27,
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
  headerBtn: {
    marginLeft: 16,
    fontSize: 16,
    fontFamily: FONT.regular,
    color: "#83829A",
  },
  space: {
    marginLeft: 71,
  },
  cardContainer: {
    flexDirection: "row",
  },
});

export default styles;
