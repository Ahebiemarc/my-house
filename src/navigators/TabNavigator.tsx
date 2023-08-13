import React, { ReactNode } from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions  } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WishlistsScreen from '../screens/WishlistsScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MapsScreen from '../screens/MapsScreen';
import Colors from '../utils/constants/Colors';
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";


import {StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent} from 'react-native'
import { RootStackParamList } from './RootNavigator';
export type TabParamList = RootStackParamList & {
  Home: undefined;
  Wishlists: undefined;
  Maps: undefined;
  Inbox: undefined;
  Profile: undefined;
};
type MapTabBottomProps = {
  children: ReactNode;
  onPress: ((event: GestureResponderEvent) => void) | undefined
} 

const Tab = createBottomTabNavigator<TabParamList>();

const MapTabBottom = ({children, onPress}: MapTabBottomProps) =>(
  <TouchableOpacity
  style={{
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    //...styles.shadow
  }}
  onPress={onPress}
  >
    <View 
    style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: `${Colors.lightRed}`,
      opacity: 0.7

    }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const tabbarIcon = ({ focused } : {focused:any}, name:string, iconName:any) => (
  <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    top: 15
  }}>
    <Icons
      name={iconName}
      size={25}
      color={Colors.lightRed}
      style={{
        opacity: focused ? 1 : 0.7,
      }}
    />
    <Text style={{
      color: `${Colors.lightRed}`,
      opacity: focused ? 1 : 0.7,
      fontSize: 10
    }}>{name}</Text>
  </View>
);

const TabNavigator = () => {

  
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,   
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        backgroundColor: Colors.white,
        borderRadius: 15,
        height: 90,
        ...styles.shadow
      },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => tabbarIcon({ focused }, 'HOME', 'home'),
            
      }}
    />
      <Tab.Screen name="Wishlists" component={WishlistsScreen} 
      options={{ tabBarLabel: '',
      tabBarIcon: ({ focused }) => tabbarIcon({ focused }, 'WISHLISTS', 'favorite'),
     }}
      />
      <Tab.Screen name="Maps" component={MapsScreen} 
      options={{ tabBarLabel: '',
      tabBarIcon: ({focused})=>(
        <Icons
            name="map" 
            size={35}
            color={Colors.white}
            style={{
              opacity: focused ? 1 : 0.7,
              top:8
            }}
          />
          
      ),
      tabBarButton: ({children, onPress}) => MapTabBottom({children, onPress})
      
     }}
      />
      <Tab.Screen name="Inbox" component={InboxScreen} 
      options={{ tabBarLabel: '',
      tabBarIcon: ({ focused }) => tabbarIcon({ focused }, 'INBOX', 'message'),
    }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{ tabBarLabel: '',
      tabBarIcon: ({ focused }) => tabbarIcon({ focused }, 'PROFILE', 'person'),
    }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

export default TabNavigator;