import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  titleposition: {
    marginTop: 80,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 40,
    color: COLORS.secondary,
    textShadowColor: "white",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1.5,
  },
  titleoutline: {
    position: "absolute",
    fontFamily: FONT.bold,
    fontSize: 40,
    color: COLORS.secondary,
    textShadowColor: "white",
    textShadowOffset: { width: -3, height: -3 },
    textShadowRadius: 1.5,
  },
  searchContainer: {
    width: "72%",
    height: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 18,
    borderWidth: 3,
    borderColor: "white",
    marginTop: 12,
    marginHorizontal: 38,
    backgroundColor: COLORS.tertiary,
  },
  searchWrapper: {
    marginVertical: 13,
    marginHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    fontSize: 20,
    width: "100%",
    height: "100%",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "80%",
    height: "80%",
    tintColor: COLORS.white,
  },
});

export default styles;
