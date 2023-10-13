import React, { useState ,useEffect, useRef } from 'react'
import { Animated, SafeAreaView, ScrollView ,View, Image,TouchableOpacity } from 'react-native'

// import { camera } from '../app/camera';

import {
  Welcome, History, Herbs
} from "./";
import { COLORS, images } from '../constants';
import { useRouter } from 'expo-router';



export default function Homepage() {
    const router = useRouter();
    const fadeInOutAnimation = useRef(new Animated.Value(0)).current;

    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeInOutAnimation, {
        toValue: 1, // Fade in
        duration: 750, // Adjust the duration as needed
        useNativeDriver: true,
      }),
    ]).start();;
      }, []);

  return (
    <SafeAreaView style={{
                position: "absolute",
                width:"100%",
            }}>

        
        <ScrollView showsVerticalScrollIndicator={false} >
          <Animated.View style={{
            flex: 1,
            zIndex: 1,
            opacity: fadeInOutAnimation, // Apply fade-in/fade-out animation
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
            <TouchableOpacity style={{
              position: 'absolute',
              bottom:-50,
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
          </Animated.View>
        </ScrollView>
        
    </SafeAreaView>
  )
}
