import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Added to display items horizontally
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
    marginHorizontal: 10, // Add margin to separate image and text
  },
  image: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    borderRadius: 20, // Add border radius for a rounded appearance
  },
  textContainer: {
    flex: 1, // Added to make the text take up available space
  },
  text: {
    fontFamily: FONT.regular,
    fontSize: 16,
  },
});

export default styles;
