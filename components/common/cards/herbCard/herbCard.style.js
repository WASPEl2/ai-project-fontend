import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    width: 147,
    height: 62,
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginBottom: 6,
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
    marginHorizontal: 10, 
  },
  image: {
    width: 50,
    height: 50, 
    borderRadius: 20, 
  },
  textContainer: {
    flex: 1, 
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
});

export default styles;
