import React, { useRef } from 'react'
import { View, Text, Dimensions, FlatList, Image, TouchableOpacity, SafeAreaView, Animated } from 'react-native'
import {faker} from '@faker-js/faker';
import { card, container, messageText, postTime, textSection, userImg, userImgWrapper, userInfo, userInfoText, userName } from '../common/Message';
//import { Ellipse } from 'react-native-svg';
import { RootStackParamList } from '../navigators/RootNavigator';
import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";


const {height, width} = Dimensions.get('screen');


/*const DATA = Array.from({length: 20}, () => ({
  id: ,
  image: faker.image.urlLoremFlickr(),
  name: faker.person.fullName(),
  message: faker.lorem.sentence(),
  date: faker.date.recent()
}))*/

interface CardMessageProps {
  image: string;
  name: string;
  message: string;
  date: Date;
  scale: any;
  //navigation: RootStackScreenProps<'TabNavigator'>;
  onPress : ()=> void
}

interface ItemProps {
  id: string;
  image: string;
  name: string;
  message: string;
  date: Date;

}

type InboxScreenProps = NativeStackScreenProps<RootStackParamList, 'TabNavigator'>;

/*function generateRandomName(): string {
  return `${faker.person.fullName()}`;
}*/

/*function generateRandomImageURL(size: string): string {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `https://loremflickr.com/${size}/${size}/cat?random=${randomNumber}`;
}*/

const DATA: ItemProps[] = Array.from(Array(50).keys()).map((_, index) => ({
  id: index.toString(),
  image: faker.image.urlLoremFlickr(),
  name: faker.person.firstName(),
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  date: new Date(),
}));

const ITEM_HEIGHT = height;
const ITEM_WIDTH = width;
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING - 3;


function formatDateToDayAgo(date: Date): string {
  const now:Date = new Date();
  const diff: number = date.getTime() - now.getTime();

  // convertir le temps en millisecondes en jours
  //const diffInDays = Math.floor(diff / (24 * 60 * 60  * 1000));
  const diffInDays = Math.floor(Math.abs(diff) / (24 * 60 * 60 * 1000));
  if(diffInDays === 0){
    return 'Today'
  }else if (diffInDays === 1) {
    return 'Yesterday';
  } else {
    return `${diffInDays} days ago`;
  }
  
}

const CardMessage : React.FC<CardMessageProps> = ({image, name, message, date, scale, onPress}) : JSX.Element =>{

  const truncatedMessage = message.slice(0, 50) + '...'; // garder les 50 premiers caractères et ajouter les trois points
  

  return (
    <Animated.View
    style={{
      transform: [{scale}]
    }}
    >
      <TouchableOpacity style={card}
      onPress={onPress}
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
  )
}



const InboxScreen: React.FC<InboxScreenProps> = ({navigation}) : JSX.Element => {

  const scrollY =  useRef(new Animated.Value(0)).current;


  return (
    <SafeAreaView 
    style={container}
    >
        <Animated.FlatList 
        data={DATA}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true}
        )}
        renderItem={({item, index}) => {
          //const position = index * ITEM_SIZE;
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2)
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1,0]
          }) 
          return (
            <CardMessage 
              image={item.image} 
              name={item.name} 
              message={item.message} 
              date={item.date}
              scale={scale}
              onPress={() => navigation.navigate('ChatScreen', {
                userName : item.name,
                photo: item.image
              })}
            />
          )
        }}
        ListFooterComponent={() => (
          // Espace vide à la fin de la liste pour le débordement du scroll
          <View style={{ height: ITEM_HEIGHT / 6 }} /> 
        )}
        />
    </SafeAreaView>
  )
}

export default InboxScreen