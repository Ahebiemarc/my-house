import { Text, View, StyleSheet, Image } from "react-native"
import Icons from "@expo/vector-icons/MaterialIcons";
import React , {useRef}from "react";
import { FlatList, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import Colors from "../../utils/constants/Colors";
import { ReviewItem } from "../../utils/constants/Interface";
import PrimaryButton from "../PrimaryButton";

const {width} = Dimensions.get('window');
const image = require('../../../assets/img/pfe/travis.jpg')
const dataReview : ReviewItem[] = [
  {
    id: "1",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Super produit !",
    date: "2023-08-20"
  },
  {
    id: "2",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Livraison rapide, je recommande.",
    date: "2023-08-19"
  },
  {
    id: "3",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Très satisfait de mon achat.",
    date: "2023-08-18"
  },
  {
    id: "4",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Bon rapport qualité-prix.",
    date: "2023-08-17"
  },
  {
    id: "5",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Excellent service client.",
    date: "2023-08-16"
  },
  {
    id: "6",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Facile à utiliser, je recommande.",
    date: "2023-08-15"
  },
  {
    id: "7",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Produit conforme à la description.",
    date: "2023-08-14"
  },
  {
    id: "8",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Livraison un peu lente.",
    date: "2023-08-13"
  },
  {
    id: "9",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Très bon rapport qualité-prix.",
    date: "2023-08-12"
  },
  {
    id: "10",
    user: 'Bob Alice',
    imageUser: image,
    comment: "Satisfait de mon achat.",
    date: "2023-08-11"
  }
]



  export const DescriptionLocation = ({title, location}: {title: string, location: string}) =>{
    return (
      <View style={{
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        marginTop: 20,
        paddingBottom: 20,
        marginHorizontal: 13
      }}>
          <Text style={{
            fontSize: 30,
            //marginVertical: 10
          }}
          >
            {title}</Text>
            {/* Icon */}
          <View style={{
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
            <View>
              <Icons name='star' color={Colors.lightRed} size={25} />
            </View>
            <View>
              <Text style={{
                fontSize: 14,
              }}>4.5 (231)</Text>
            </View>
            
          </View>
          {/* Icon */}
          <View style={{
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View>
              <Icons name='location-pin' color={Colors.lightRed} size={25} />
            </View>
            <View>
              <Text style={{
                fontSize: 14,
              }}>{location}</Text>
            </View>
          </View>
      </View>
    )
  }


  export const Description = ({description}: {description:string[]}) =>{
    return (
      <View style={{
        marginVertical: 20,
        marginHorizontal: 13,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingBottom: 20,
      }}>
        {description.map((item, index) => (
          <View key={index}>
            <Text style={{
              fontSize: 17,
              color: Colors.dark
            }}>{item}</Text>
          </View>
        ))}
      </View>
    )
  }

  export const UserP = () => {
    return(
      <View
        style={{
          marginVertical: 20,
        marginHorizontal: 13,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingBottom: 20,
        }}
      >
        <View  
          style={{
            flexDirection: 'row-reverse',
            justifyContent:  'space-around',
            alignItems: 'center',
          }}
        >
          <View style={{
            height: 50,
            width: 50,
            borderRadius: 50
          }}>
            <Image   source={require('../../../assets/img/pfe/travis.jpg')} 
            style={styles.imageUser}
            />
          </View>
          <View>
            <View><Text>Markus Ahebié</Text></View>
            <View><Text>ahebiemac22@gmail.com</Text></View>
            <View><Text>Monastir 5000, Tunisie</Text></View>
          </View>
        </View>
      </View>
    )
  }

  export const Categorie = () => {
    return(
      <View
        style={{
          //marginVertical: 20,
        marginHorizontal: 13,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingBottom: 20,
        }}
      >
        {/* Icon */}
        <View style={{
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
            <View>
              <Icons name='apartment' color={Colors.lightRed} size={55} 
              style={{
                marginRight: 15
              }} 
              />
            </View>
            <View>
              <Text style={{
                fontSize: 18,
              }}>Apartment</Text>
            </View>
            
          </View>
          {/* Icon */}
          <View style={{
            flexDirection: 'row',
            //justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
            <View>
              <Icons name='school' color={Colors.lightRed} size={55}
              style={{
                marginRight: 15
              }} 
              />
            </View>
            <View>
              <Text style={{
                fontSize: 18,
              }}>Student</Text>
            </View>
            
          </View>
      </View>
    )
  }

  export const ReviewLitle = () =>{

    const topRef = useRef<FlatList>(null);
    const previousIndex = useRef<number>(0);

    const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const itemWidth = width * 0.8 + 20; // Largeur de chaque élément, incluant la marge droite
      const currentIndex = Math.floor(contentOffsetX / itemWidth); // Index de l'élément actuel
    
      // Vérifie si l'index actuel est différent de l'index précédent
      if (currentIndex !== previousIndex.current) {
        previousIndex.current = currentIndex; // Met à jour l'index précédent
    
        if (currentIndex < dataReview.length - 1) {
          topRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true }); // Faire défiler vers l'élément suivant
        }
      }
    };

    const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(offsetX / (width * 0.8 + 20)); // Calcul de l'index de l'élément en fonction de l'offset
    
      if (topRef.current) {
        topRef.current.scrollToIndex({ index: newIndex, animated: true }); // Faire défiler jusqu'à l'index calculé
      }
    };

    return (
      <View
      style={{
        marginHorizontal: 13,
        marginBottom: 40
      }}
      >
        <View
        style={{
          //marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
        }}>
          <Icons name="star" color={Colors.lightRed} size={25} style={{marginRight: 5}}/>
          <Text
          style={{
            fontSize: 20
          }}
          
          >4.5 | 217 reviews</Text>
        </View>
        <FlatList
        ref={topRef}
        data={dataReview}
        horizontal
        keyExtractor={item => item.id.toString()}
        decelerationRate='fast'
        scrollEventThrottle={16}
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        renderItem={({item}) => {
          const truncatedMessage = item.comment.length <=150 ? item.comment : item.comment.slice(0, 150) + '...';
          return (
            <View
            style={{
              borderWidth: 0.5,
              borderColor: Colors.gray,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingTop: 5,
              width: width * .8,
              height: 150,
              marginRight: 20
            }}
            >
              <View
              style={{
                //marginBottom: 20,
                marginVertical: 15
              }}
              >
                <Text>{truncatedMessage}</Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom:10,
                  left: 10,
                  flexDirection:  'row',
                  alignItems: 'center',
                }}
              >
                <View>
                  <Image source={item.imageUser} style={[styles.imageUser, {marginRight: 10,}]} />
                  </View>
                <View>
                  <Text 
                     style={{
                      marginBottom: 5,
                      fontWeight: '600',
                     }}
                  >{item.user}</Text>
                  <Text
                    style={{
                      color: Colors.gray,
                      fontWeight: '600',
                    }}
                  >{item.date}</Text>
                </View>
              </View>
  
            </View>
          )
        }}

        />
      </View>
    )
  }

  export const ChatButton = () => {
    return(
      <View style={{
        marginBottom: 15,
        marginHorizontal: 13,
      }}>
        <PrimaryButton
                  label="Chat"
                  //onPress={() => navigation.navigate("TabNavigator")}
                />
      </View>
    )
  }


  const styles = StyleSheet.create({
 
    imageUser: {
      height: 50,
      width: 50,
      borderRadius: 50,
      resizeMode: 'cover'
    }



  })

