import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import {card, messageText, postTime, textSection, userImg, userImgWrapper, userInfo, userInfoText, userName } from '../../common/Message';
import {MaterialIcons} from "@expo/vector-icons";
import {CardMessageProps} from  '../../utils/constants/Interface'
import { formatDateToDayAgo } from '../../utils/constants/Functions';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Colors from '../../utils/constants/Colors';

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width;
const TRANSLATE_X_TRUESHOLD = -ITEM_WIDTH * .3
const LIST_ITEMS_HEIGHT = 85.5




export const CardMessage : React.FC<CardMessageProps> = ({id, image, name, message, date, scale, onPress, onDismiss}) : JSX.Element =>{

    const truncatedMessage = message.slice(0, 50) + '...'; // garder les 50 premiers caractères et ajouter les trois points
    const translateX = useSharedValue(0);
    const iconTranslateX = useSharedValue(0);
    const itemsHeight = useSharedValue(LIST_ITEMS_HEIGHT)
    const opacity = useSharedValue(1)



    const onPressHandler = () => {
      // Vérifier si le PanGestureHandler est actif (translateX.value différent de 0)
      if (translateX.value === 0 && onPress) {
        onPress();
      }
    };
    const onGestureEvent =  useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({

      onActive: (event) => {
        translateX.value = event.translationX;
        iconTranslateX.value = event.translationX;

      },
      onEnd: () => {
        const shouldBeDismissed  = translateX.value < TRANSLATE_X_TRUESHOLD
        if (shouldBeDismissed) {
          translateX.value = withTiming(-ITEM_WIDTH)
          iconTranslateX.value = withTiming(-ITEM_WIDTH);
          opacity.value = withTiming(0)
          itemsHeight.value = withTiming(0, undefined, (isFinished) =>{
            if (isFinished && onDismiss) {
              runOnJS(onDismiss)({
                id,
                image,
                name,
                message,
                date
              })
            }
          })
        }
        else{
          translateX.value = withTiming(0);
          iconTranslateX.value = withTiming(0);
        }
        
      },
    })

    const rStyle = useAnimatedStyle(() => ({
      transform:  [{
        translateX:  translateX.value
      }]
    }))

    const iconDeleteStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: iconTranslateX.value }],
    }));

    const rContainerStyle = useAnimatedStyle(() => {
      return{
        height : itemsHeight.value,
        opacity : opacity.value
      }
    })

    


    const rIconDeleteStyle = useAnimatedStyle(() => {

      const opacity = withTiming(translateX.value < TRANSLATE_X_TRUESHOLD ? 1 : 0)
      return {opacity};
    })

    
  
    return (
      <Animated.View
      style={[{
        transform: [{scale}]
      }, rContainerStyle]}
      >
        <PanGestureHandler
        onGestureEvent={onGestureEvent}
        activeOffsetX={[-5, 5]}
        failOffsetY={[-5, 5]}
        >
          <Animated.View style={[card, rStyle]}>
            <TouchableOpacity 
            activeOpacity={1}
              onPress={onPressHandler}
              //onLongPress={onPress}
              >
              <View style={userInfo}>
                <View style={userImgWrapper}>
                  <Image source={{uri: image}} style={userImg} />
                </View>
                <View style={textSection}>
                  <View style={userInfoText}>
                    <Text style={userName}>
                      {name}
                    </Text>
                    <Text style={postTime}>
                      {formatDateToDayAgo(date)}
                    </Text>
                  </View>
                  <Text style={messageText}>{truncatedMessage}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
        <Animated.View style={[styles.iconDeleteContainer, rIconDeleteStyle, rContainerStyle]}>
          <MaterialIcons name='delete' size={40}  color={Colors.lightRed}/>
        </Animated.View>
      </Animated.View>
    )
  }


  const styles  = StyleSheet.create({
    iconDeleteContainer : {
      //backgroundColor: Colors.lightRed,
      justifyContent: 'center' as const,
      alignItems: 'center' as const,
      position: 'absolute' as const,
      right: '1%',
      height: LIST_ITEMS_HEIGHT,
      width: LIST_ITEMS_HEIGHT,
    }
  })