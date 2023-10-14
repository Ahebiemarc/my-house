import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Icons from "@expo/vector-icons/MaterialIcons";
import Colors from '../utils/constants/Colors';

const NUMBER_COLUMS = 3;

const FavoriADD = () => {
  return (
        <View style={styles.cardFAV}>
          <Icons name='close' size={25} color={Colors.lightRed}
            style={styles.iconClose}
           />
        <Image 
          source={require('../../assets/img/pfe/9bb254fc-866e-41de-9aa7-17fd19a541a0.webp')} 
          style={styles.image}
          />
        </View>
  )
}

const styles = StyleSheet.create({
  cardFAV:{
    width: 150,
    height: 150,
    margin: 15,
  },
  
  iconClose:{
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    borderWidth: 2,
    borderColor: Colors.darkRed,
    borderRadius: 50,
    padding: 10

  },
  image:{
    width: 150,
    height: 150
  }
})

export default FavoriADD;