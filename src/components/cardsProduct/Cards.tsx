import React, { useEffect, useRef, useState } from 'react'
import { RefreshControl, View, FlatList,Dimensions, StyleSheet, Animated } from 'react-native'
import Card from './Card';
import Colors from '../../utils/constants/Colors';


const {width, height} = Dimensions.get('screen');

const ITEM_WIDTH:number = width;
const ITEM_HEIGHT:number = height
const HEADER_HEIGHT = 15;
const data = [
    {
        location : 'Tunis, Tunisie',
        title: 'Single Appart',
        date: '10 Oct 2023',
        rent: 'Month',
        description: [
            'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
            'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
        ],
        price: '418 dt'
      },
      {
        location : 'Monastir, Tunisie',
        title: 'Couple Appart',
        date: '10 Oct 2023',
        rent: 'Month',
        description: [
            'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
            'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
        ],
        price: '718 dt'
      },
      {
        location : 'Ariana , Tunis',
        title: 'Student Appart',
        date: '10 Oct 2023',
        rent: 'Month',
        description: [
            'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
            'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
        ],
        price: '518 dt'
      },
      
]


const Cards = () => {
    const [refreshing, setRefreshing] = useState(false);
    const scrollY = useRef(new Animated.Value(0)).current;
    const offsetAnim = useRef(new Animated.Value(0)).current;
    // Utilise le hook useRef pour stocker une référence au conteneur de la FlatList
    const listContainerRef = useRef<View>(null);

    //Cela permet de bloquer l'animation lorsque la FlatList est défilée au-delà de la hauteur de l'en-tête (HEADER_HEIGHT).
    /*
     est un objet d'animation créé en utilisant la fonction Animated.diffClamp 
     dans le code précédent. Cet objet combine les valeurs scrollY et offsetAnim 
     et limite le résultat de l'addition entre ces deux valeurs à 
     une fourchette spécifiée. Cette fourchette est définie entre 0 et la valeur 
     de HEADER_HEIGHT.
     */
    const clampScroll = Animated.diffClamp(
        Animated.add(
            scrollY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp'
            }),
            offsetAnim
        ),
        0,
        HEADER_HEIGHT
    );

    //pour garder une trace des valeurs de défilement.
    let _clampedScrollValue = 0;
    let _offsetValue = 0;
    let _scrollValue = 0;

    // Fonction pour gérer l'action de rafraîchissement
    const onRefresh = () =>{


        // Simulez une action asynchrone avec setTimeout
        setTimeout(() => {
            // Après que les données ont été récupérées ou mises à jour, remettez 'refreshing' à 'false'
            setRefreshing(false);
        }, 2000); // Changez la valeur du délai selon vos besoins
    };

    /**
     * pour ajouter des écouteurs sur la valeur scrollY et la valeur offsetAnim.
     * Lorsque le défilement a lieu, la fonction de rappel dans scrollY.addListener est déclenchée, mettant à jour les variables _scrollValue et _clampedScrollValue.
     * L'écouteur de offsetAnim met à jour la variable _offsetValue.
    */

    useEffect(() => {
        scrollY.addListener(({value}) => {
            const diff = value - _scrollValue;
            _scrollValue = value;
            _clampedScrollValue = Math.min(
                Math.max(_clampedScrollValue * diff, 0),
                HEADER_HEIGHT
            )
        })

        offsetAnim.addListener(({value}) => {
            _offsetValue = value;
        })

    }, [])

    let scrollEndTimer:any;

    // est appelée lorsque le défilement commence. Elle annule le timer scrollEndTimer
    const onMomnetumScrollBegin = () =>{
        clearTimeout(scrollEndTimer);
    }

    /*
     est appelée lorsque le défilement ralentit ou arrêté. Elle calcule la nouvelle valeur d'offset toValue pour l'animation 
     en fonction de la position actuelle et de la position de l'en-tête.
     */
    const onMomentumScrollEnd = () =>{

        /**
         * _scrollValue > HEADER_HEIGHT : Cela signifie que le défilement a atteint ou dépassé la hauteur de l'en-tête (HEADER_HEIGHT). Cela se produit lorsque la FlatList est défilée vers le bas et que l'en-tête est entièrement masquée.
         * _clampedScrollValue > HEADER_HEIGHT/2 : C'est une vérification supplémentaire pour affiner le comportement de l'animation. 
         * Elle permet de savoir si l'en-tête est masquée au moins à moitié. Si tel est le cas, on choisit de montrer complètement l'en-tête (_offsetValue + HEADER_HEIGHT), sinon on choisit de masquer complètement l'en-tête (_offsetValue - HEADER_HEIGHT).
         */
        const toValue = _scrollValue > HEADER_HEIGHT && _clampedScrollValue > HEADER_HEIGHT/2
        ? _offsetValue + HEADER_HEIGHT : _offsetValue - HEADER_HEIGHT;

        Animated.timing(offsetAnim, {
            toValue,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    /*
     est appelée lorsque le défilement ralentit. Elle calcule la nouvelle valeur d'offset toValue pour l'animation en fonction 
     de la position actuelle et de la position de l'en-tête.
     */

    const onScrollEndDrag = () =>{
      scrollEndTimer  = setTimeout(onMomentumScrollEnd, 250);
    }

    /**
     * pour interpoler la valeur de défilement dans la fourchette [-HEADER_HEIGHT, 0] 
     * en fonction de la valeur scrollY. Cela permet de masquer 
     * et de montrer l'en-tête pendant le défilement.
    */

    /*
    La fonction interpolate est utilisée pour créer une relation de correspondance 
    entre la valeur de clampScroll (qui est limitée entre 0 et HEADER_HEIGHT) 
    et une nouvelle plage de valeurs.
     */
    const Translate: Animated.AnimatedInterpolation<string | number> = clampScroll.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp'
    }); 
    

  return (
    <Animated.View
    ref={listContainerRef}
    style={{
        marginTop: -HEADER_HEIGHT + 15,
        transform: [{ translateY: Translate}],
        //backgroundColor: "#ccc"
        
        
    }}
    >
        {/*<Animated.View style={[
            styles.header,
            {transform: [{ translateY: headerTranslate}]}
        ]}
        >
        </Animated.View>*/}
        <Animated.FlatList 
        style={{
            height: ITEM_HEIGHT
        }}
            data={data}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            //scrollEventThrottle={16}
            onMomentumScrollBegin={onMomnetumScrollBegin}
            onMomentumScrollEnd={onMomentumScrollEnd}
            scrollEventThrottle={16}
            onScrollEndDrag={onScrollEndDrag}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: { y: scrollY}}}],
                {useNativeDriver: true}
            )}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={['#9Bd35A', '#689F38']}
                    tintColor={Colors.skyBlue}

                />
            }

            renderItem={({item}) =>(
                <Card location={item.location} title={item.title} date={item.date} rent={item.rent} price={item.price}  
                />
            )}
            ListFooterComponent={() => (
                // Espace vide à la fin de la liste pour le débordement du scroll
                <View style={{ height: ITEM_HEIGHT / 2.9 }} /> 
              )}
        
        />
    </Animated.View>

  )
}

/*const styles = StyleSheet.create({
    header: {
      height: HEADER_HEIGHT,
      position: 'absolute',
      right: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      zIndex: 1,
      marginBottom: 15
    },
  });*/

export default Cards