import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Cards from '../components/Cards';

const HomeScreen = () => {
  return (
    <SafeAreaView 
    style={{flex: 1}}>
      <View>
        <Search />
        <Categories />
        <Cards />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;