import React, { useState } from 'react'
import { ScrollView, View, RefreshControl } from 'react-native'
import Card from './Card';
import Colors from '../utils/constants/Colors';



const Cards = () => {
    const [refreshing, setRefreshing] = useState(false);

    // Fonction pour gérer l'action de rafraîchissement
    const onRefresh = () =>{


        // Simulez une action asynchrone avec setTimeout
        setTimeout(() => {
            // Après que les données ont été récupérées ou mises à jour, remettez 'refreshing' à 'false'
            setRefreshing(false);
        }, 2000); // Changez la valeur du délai selon vos besoins
    }
  return (
    <ScrollView
    scrollEventThrottle={16}
    refreshControl={
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#9Bd35A', '#689F38']}
            tintColor={Colors.skyBlue}
            //title="Tirer pour rafraîchir"
            //titleColor="#000000"
        />
    }
    >
        <View>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </View>
        
    </ScrollView>
  )
}

export default Cards