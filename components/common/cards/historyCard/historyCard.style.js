import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 119,
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: 9,
    marginBottom: 8,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  imageContainer: {
    marginTop: 13,
    marginHorizontal: 13,
    borderRadius: 9,

    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
  },
  herbImage: {
    width: 92,
    height: 100,
    borderRadius: 9,
  },
  moreTextContainer: {
    alignItems: "center",
    marginTop: 7,
    marginBottom: 10,
  },
  moreText: {
    fontFamily: FONT.regular,
    fontSize: 10,
  },
});

export default styles;
