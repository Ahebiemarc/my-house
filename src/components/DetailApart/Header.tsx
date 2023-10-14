import React,{useRef, useState} from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {Dimensions, View, Image, TouchableOpacity, StyleSheet, Animated} from 'react-native'
import { RootStackParamList } from '../../navigators/RootNavigator';
import Colors from '../../utils/constants/Colors';
import Icons from "@expo/vector-icons/MaterialIcons";
import { indicatonPosition } from '../cardsProduct/Card';
import { imagesT } from '../../utils/Data';
import Constants from "expo-constants";
import { MAX_HEADER_HEIGHT } from './Model';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';


type DetailApartNavigationProps  = NativeStackScreenProps<RootStackParamList, 'DetailApart'>;

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH: number = width;
const ITEM_HEIGHT: number = height * 0.75;
const CARD_WIDTH: number = ITEM_WIDTH;
const SPACING: number = 0.1;
const DOT_SIZE: number = 6;
const DOT_SPACING: number = 2;
const DOT_INDICATOR: number = DOT_SIZE + DOT_SPACING + 2;
export const IMAGE_HEIGHT = height * 0.400;


const Header:React.FC<DetailApartNavigationProps > = ({route , navigation}) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const {data, fav} = route.params;


    const [isFavorite, setIsFavorite] = useState(fav);

  const handleFavoritePress = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  const IconHeart = () => {

    
    return(
      <TouchableOpacity
        activeOpacity={1}
        style={styles.favoriteIconContainer}
        onPress={handleFavoritePress}
      >
        <Icons
          name="favorite"
          size={30}
          color={fav ? Colors.lightRed : "white"}
        />
      </TouchableOpacity>
    )
  }

  
  
  const IconBack = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.backIconContainer}
        onPress={() => navigation.goBack()}
      >
        <Icons
          name="arrow-back-ios"
          size={30}
          color={Colors.white}
        />
      </TouchableOpacity>
    )
  }

  


  const renderItem = ({item, index}) => {
    return(
 
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('GalleryScreen')}
          >
              <Image source={item} style={styles.cardImage} />
          </TouchableOpacity>

    )
  }
  const PaginationC = () => {
    return (
      <View style={styles.pagination}>
        {data.image.map((_, index) => {
          return <View key={index} style={[styles.dot]} />;
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateX: scrollX.interpolate({
                    inputRange: [0, ITEM_WIDTH],
                    outputRange: [0, DOT_INDICATOR],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    )
  }
  return (
        <Animated.View
        style={[
            styles.container,
        ]}
      >
        <Animated.FlatList
          data={data.image}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={CARD_WIDTH + SPACING}
          decelerationRate="fast"
          pagingEnabled
          horizontal={true} // Défilement horizontal
          showsHorizontalScrollIndicator={false} // Cacher l'indicateur de défilement horizontal
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={renderItem}

        />
        <PaginationC />
        <IconHeart />
        <IconBack />
      </Animated.View>
  )
}


const styles = StyleSheet.create({
    container:{
        height: IMAGE_HEIGHT,
        borderRadius: 2,
    },
    cardImage: {
        height: IMAGE_HEIGHT,
        width: width,
        resizeMode: "cover",
    },
    favoriteIconContainer: {
      position: "absolute",
      top: 15,
      right: 20,
    },
    backIconContainer: {
      position: "absolute",
      top: 15,
      left: 20,
    },
    favoriteIconRed: {
      backgroundColor: "red",
    },
    favoriteIconTransparent: {
      backgroundColor: "transparent",
    },
    pagination: {
      position: 'relative',
      flexDirection: "row",
      justifyContent: "center",
      marginTop: -20,
      top: -14.9
      //alignItems: 'center'
    },
    dot: {
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: DOT_SIZE,
      backgroundColor: Colors.darkGray,
      marginHorizontal: DOT_SPACING,
    },
    dotIndicator: {
      position: "absolute",
      justifyContent: "center",
      top: 0,
      left: indicatonPosition(imagesT.length), //(images.length-1) + (213-(images.length-1)),
      //left: (DOT_SIZE + DOT_SPACING) * (images.length - 1), // Calculer le marginLeft en fonction de la taille du tableau
      width: DOT_INDICATOR,
      height: DOT_INDICATOR,
      borderRadius: DOT_INDICATOR,
      borderWidth: 1,
      borderColor: Colors.lightRed,
  
      marginTop: -(DOT_SIZE - 4),
      marginLeft: -(DOT_SIZE + 44),
    },
});

export default Header