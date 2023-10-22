import React, { useState ,useEffect, useRef } from 'react'
import { Animated, SafeAreaView, ScrollView ,View, Image,TouchableOpacity } from 'react-native'

import { COLORS, images } from '../constants';
import { Stack, useRouter } from 'expo-router';
import { Dimensions } from "react-native";


import {
  Welcome, History, Herbs
} from "./";




export default function Homepage() {
    const router = useRouter();

    const { height, width } = Dimensions.get("window");

    const fadeInOutAnimation = useRef(new Animated.Value(0)).current;

    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeInOutAnimation, {
        toValue: 1, // Fade in
        duration: 750,
        useNativeDriver: true,
      }),
    ]).start();;
      }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          <Animated.View style={{
            opacity: fadeInOutAnimation,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom:60 
          }}>
            <Welcome
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={() => {
                if (searchTerm) {
                    router.push(`/search/${searchTerm}`)
                }
                }}
            />

            <Herbs />
            <History />
            
          </Animated.View>
          
      </ScrollView>
      <TouchableOpacity style={{
              position: 'absolute',
              top:height-56,
              right:30,
              width:66,
              height: 66,
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:COLORS.secondary,
              borderRadius: 66/2,
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
              }}
              onPress={(id) => {
                router.push('camera');
                }}
              >
              <Image
                source={images.camera}
                resizeMode='contain'
                style={{
                  width: "60%",
                  height: "60%",
                  
                }}
              />
        </TouchableOpacity>
    </SafeAreaView>
  );
}
