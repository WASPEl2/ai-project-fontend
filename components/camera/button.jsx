import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FONT } from '../../constants';

export default function Button({ title, onPress, icon, color, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={color ? color : '#f1f1f1'} />
      <Text style={{    
        fontFamily:FONT.bold,
        fontSize: 16,
        color: textColor ? textColor : '#f1f1f1',
        marginLeft: 10,
      }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {

  },
});