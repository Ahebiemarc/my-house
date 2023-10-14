import React, { useRef } from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {
  NativeStackScreenProps,   
} from "@react-navigation/native-stack";
import { RootStackParamList } from '../navigators/RootNavigator';
import Header from '../components/DetailApart/Header'
import Content from '../components/DetailApart/Content';

type DetailApartNavigationProps  = NativeStackScreenProps<RootStackParamList, 'DetailApart'>;




const DetailApart: React.FC<DetailApartNavigationProps> = ({route, navigation}) => {

  const AppartID = route.params.data.id
  
  return (
    <SafeAreaView style={{
      flex: 1,
      }}>
    <Header {...{route, navigation}}/>
    <Content {...{route, navigation}} />

    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  
});



export default DetailApart;