import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './herbCard.style';

import { icons, images } from '../../../../constants'


const HerbCard = ({ id, img, name, handleCardPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => handleCardPress(id)}
      >
      <View style={styles.imageContainer}>
        <Image
          source={icons[`image${id}`]}
          resizeMode='cover'
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HerbCard;
