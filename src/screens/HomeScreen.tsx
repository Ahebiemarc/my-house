import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Cards from '../components/cardsProduct/Cards';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList } from '../navigators/TabNavigator';

type CardNavigationProps = NativeStackScreenProps<TabParamList, 'Home'>
const HomeScreen: React.FC<CardNavigationProps> = ({navigation, route}) => {
  return (
    <SafeAreaView
    style={{
      flex: 1
  }}
    >
        <Search />
        <Categories navigation={navigation} route={route} />
    </SafeAreaView>
  )
}


export default HomeScreen;