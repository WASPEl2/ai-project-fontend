import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './historyCard.style'
import { images } from '../../../../constants'

const HistoryCard = ({responseData, img, handleCardPress}) => {

  

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => handleCardPress(responseData,img)}
      >
      <View>
        <View style={styles.imageContainer}>
            <Image
              source={{
                uri: img,
              }}
              resizeMode= 'cover'
              style={styles.herbImage}
            />
        </View>
        
        <View style={styles.moreTextContainer}>
            <Text style={styles.moreText}>เพิ่มเติม {'>>'}</Text> 
        </View>
          
      </View>
    </TouchableOpacity>
  )
}

export default HistoryCard