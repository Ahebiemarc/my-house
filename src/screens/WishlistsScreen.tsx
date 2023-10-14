import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import FavoriADD from '../components/FavoriADD';

const WishlistsScreen = () => {
  return (
    <SafeAreaView 
    style={{flex: 1,}}>
        <FavoriADD />
    </SafeAreaView>
  );
};

export default WishlistsScreen;