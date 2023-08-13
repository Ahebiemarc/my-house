
import React, { useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, } from 'react-native';

import Icons from '@expo/vector-icons/MaterialIcons';

import Colors from '../utils/constants/Colors';
import Cards from './cardsProduct/Cards';
import { SharedElement } from 'react-navigation-shared-element';
import { dataProps } from '../utils/constants/Interface';
import { CATEGORIES, data } from '../utils/Data';

import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TabParamList } from '../navigators/TabNavigator';


type CardNavigationProps = NativeStackScreenProps<TabParamList, 'Home'>

const Categories: React.FC<CardNavigationProps> = ({route, navigation}) => {


  const itemC = data[0];
  const selectedItemCIndex = CATEGORIES.findIndex((c) => c.id === itemC.id)

  const renderCategoryItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity style={styles.categoryItem}  key={index}>
      <Icons name={item.icon} size={25}
        color={Colors.darkOverlayColor}
        style={{
          //alignItems: 'center',
          //marginLeft: 7
        }}
      />
      <Text
        style={[styles.categoryText]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  )

  return (
    <View>
    <View style={styles.container}>
      <FlatList
        horizontal
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16} // Contrôler la fréquence des événements de défilement
      />
    </View>

    <Cards  data={data} navigation={navigation} route={route} />
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.gray,
  },
  selectedCategoryItem: {
    backgroundColor: '',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.white,
  },
  selectedCategoryText: {
    color: Colors.darkGray,
  },
  indicatorContainer: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray', // Couleur de l'indicateur
    borderRadius: 3,
  },
  indicator: {
    position: 'absolute',
    height:2,
    backgroundColor: Colors.lightRed, // Couleur de l'indicateur
    borderRadius: 3,
  },
});

export default Categories;

