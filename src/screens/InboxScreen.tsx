import React, { useCallback, useRef, useState } from 'react'
import { View, Dimensions, FlatList, SafeAreaView } from 'react-native'
import {faker} from '@faker-js/faker';
import { container} from '../common/Message';
import { RootStackParamList } from '../navigators/RootNavigator';
import {
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { CardMessage} from '../components/cardMessage/CardMessage';
import Animated from 'react-native-reanimated';
 
import {ItemMessageProps} from '../utils/constants/Interface'

const {height, width} = Dimensions.get('screen');


/*const DATA = Array.from({length: 20}, () => ({
  id: ,
  image: faker.image.urlLoremFlickr(),
  name: faker.person.fullName(),
  message: faker.lorem.sentence(),
  date: faker.date.recent()
}))*/





type InboxScreenProps = NativeStackScreenProps<RootStackParamList, 'TabNavigator'>;


const DATA: ItemMessageProps[] = Array.from(Array(50).keys()).map((_, index) => ({
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








const InboxScreen: React.FC<InboxScreenProps> = ({navigation}) : JSX.Element => {

  const scrollY =  useRef(new Animated.Value(0)).current;

  const [messagesBulle, setMessagesBulle] = useState(DATA)

  const onDismiss = useCallback((messageBulle: ItemMessageProps) => {
    setMessagesBulle((messagesBulle) => {
      //console.log(messagesBulle.length);
      return messagesBulle.filter((item) => item.id !== messageBulle.id
      )})
  }, [])
  
  console.log(messagesBulle.length);
  

  return (
    <SafeAreaView 
    style={container}
    >
        <Animated.FlatList 
        data={messagesBulle}
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
            outputRange: [1, 1, 1, 0] // Ajustez cette plage selon vos besoins
          });
          //const validScale = typeof scale === 'number' ? scale : 1;
          const scaleValue = +scale;
          //const validScale = isNaN(scaleValue) ? scaleValue : 1
          return (
            <CardMessage
              id ={item.id} 
              image={item.image} 
              name={item.name} 
              message={item.message} 
              date={item.date}
              scale={scale}
              onPress={() => navigation.navigate('ChatScreen', {
                userName : item.name,
                photo: item.image
              })}
              onDismiss={onDismiss}
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