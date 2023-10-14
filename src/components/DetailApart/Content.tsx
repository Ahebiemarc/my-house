import React, {useRef, useEffect} from 'react'
import {StyleSheet, Dimensions } from 'react-native'
import { Categorie, Description, DescriptionLocation, UserP, ReviewLitle, ChatButton } from './DetailA'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/RootNavigator';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet'

import { IMAGE_HEIGHT } from './Header';

const {width, height} = Dimensions.get('screen');

const ITEM_HEIGHT:number = height

type DetailApartNavigationProps  = NativeStackScreenProps<RootStackParamList, 'DetailApart'>;



const Content:React.FC<DetailApartNavigationProps> = ({route, navigation}) => {

    const {data}  = route.params;
    


  return (
    <BottomSheet
         snapPoints={[(height/2) + 35, height-35]}
    >
          <BottomSheetScrollView>
            <DescriptionLocation title={data.title} location={data.location} />
            <Description description={data.description}/>
            <Categorie />
            <UserP />
            <ReviewLitle />
            <ChatButton />
          </BottomSheetScrollView>
    </BottomSheet>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Content