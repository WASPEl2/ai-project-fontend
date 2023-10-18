import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { images } from "../../constants";
import Homepage from '../home';
const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  const imageSize = 0.65 * Math.min(width, height);

  const edge = useSafeAreaInsets();

  const fadeInOutAnimation = useRef(new Animated.Value(0)).current;

  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeInOutAnimation, {
        toValue: 1, // Fade in
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.delay(1000), // Delay
      Animated.timing(fadeInOutAnimation, {
        toValue: 0, // Fade out
        duration: 500, 
        useNativeDriver: true,
      }),
    ]).start(() => {
                // Animation is complete
                setAnimationComplete(true);
            });;
      }, []);

  return (
    <View style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#BEDEA5",
    }}>
      <Animated.View style={{
        flex: 1,
        opacity: fadeInOutAnimation, // Apply fade-in/fade-out animation
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Animated.Image
          source={images.logo}
          style={{ width: imageSize, height: imageSize }}
        />
      </Animated.View>
      {/* {animationComplete && <Homepage />} */}
    </View>
  );
}
