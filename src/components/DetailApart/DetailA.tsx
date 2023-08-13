import { Text, View, StyleSheet, Image } from "react-native"
import Icons from "@expo/vector-icons/MaterialIcons";
import React, {useState} from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../utils/constants/Colors";




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
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              resizeMode: 'cover'
            }}
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


  const styles = StyleSheet.create({
 
    



  })

