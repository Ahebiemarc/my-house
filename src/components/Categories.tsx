
import React, { useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
useSharedValue,
useAnimatedStyle,
withTiming,
runOnJS,
} from 'react-native-reanimated';
import Icons from '@expo/vector-icons/MaterialIcons';

import Colors from '../utils/constants/Colors';

const Categories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const flatListRef = useRef<FlatList | null>(null);
  const indicatorWidth = useSharedValue(100); // Utilisez useSharedValue pour la largeur de l'indicateur
  const indicatorPosition = useSharedValue(0); // Utilisez useSharedValue pour la position de l'indicateur
  const selectedCategory = useSharedValue(0); // Utilisez useSharedValue pour l'index de la catégorie sélectionnée

  const categories = [
  { id: '1', name: 'All', icon: 'menu' },
  { id: '2', name: 'Student', icon: 'school' },
  { id: '3', name: 'luxury', icon: 'hot-tub'},
  { id: '4', name: 'duplex', icon: 'apartment' },
  { id: '5', name: 'couple', icon: 'people' },
  { id: '6', name: 's+0', icon: 'single-bed' },
  { id: '7', name: 's+1', icon: 'weekend' },
  { id: '8', name: 's+2', icon: 'king-bed' },
  { id: '9', name: 's+3', icon: 'meeting-room' },
  { id: '10', name: 's+4', icon: 'hotel' },
  // Ajoutez d'autres catégories si nécessaire
  ];

  const handleCategoryChange = (index: number) => {
    setSelectedCategoryIndex(index);
    selectedCategory.value = index; // Mettre à jour l'index de la catégorie sélectionnée
    indicatorPosition.value = withTiming(index * indicatorWidth.value);
    runOnJS(scrollToCategory)(index);
  };

  const handleCategoryTextLayout = (event: any, index: number) => {
    const { width } = event.nativeEvent.layout;
    indicatorWidth.value = withTiming(width + 16); // Ajouter de l'espace supplémentaire pour un meilleur rendu
  };

  const scrollToCategory = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  const scrollHandler = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    indicatorPosition.value = contentOffset;
    // Mettre à jour l'index de la catégorie sélectionnée en fonction du défilement
    selectedCategory.value = Math.round(contentOffset / indicatorWidth.value);
  };

  const indicatorStyle = useAnimatedStyle(() => {
  return {
    width: indicatorWidth.value,
    left: indicatorPosition.value,
  };
  });

  const renderCategoryItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity
      onPress={() => handleCategoryChange(index)}
      style={[
        styles.categoryItem,
        index === selectedCategoryIndex && styles.selectedCategoryItem,
      ]}
    >
      <Icons name={item.icon} size={25} color={index === selectedCategoryIndex ? Colors.darkGray : Colors.skyBlue} 
      
      style={{
        alignItems: 'center',
        marginLeft: 6
      }} />
      <Text
        onLayout={(event) => handleCategoryTextLayout(event, index)}
        style={[styles.categoryText, index === selectedCategoryIndex && styles.selectedCategoryText]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler} // Utiliser scrollHandler pour gérer le défilement
        scrollEventThrottle={16} // Contrôler la fréquence des événements de défilement
      />
      {/* Indicateur de suivi horizontal */}
      <View style={styles.indicatorContainer}>
        <Animated.View style={[styles.indicator, indicatorStyle]} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 15,
  },
  selectedCategoryItem: {
    backgroundColor: '',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
    color: Colors.skyBlue,
    alignItems: 'center',
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

