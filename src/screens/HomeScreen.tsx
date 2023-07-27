import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Cards from '../components/Cards';

const HomeScreen = () => {
  return (
    <View
    style={{
      flex: 1
  }}
    >
        <Search />
        <Categories />
        <Cards />
    </View>
  )
}

export default HomeScreen;