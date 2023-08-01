import React from "react";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
  
} from "@react-navigation/native-stack";
import IntroScreen01 from "../screens/IntroScreen01";
import IntroScreen02 from "../screens/IntroScreen02";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TabNavigator from "./TabNavigator";
import ChatScreen from "../screens/ChatScreen";
import HomeScreen from "../screens/HomeScreen";
import WishlistsScreen from "../screens/WishlistsScreen";
import MapsScreen from "../screens/MapsScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";

export type RootStackParamList = {
  IntroScreen01?: undefined,
  IntroScreen02?: undefined,
  LogInScreen?: undefined,
  SignUpScreen?: undefined,
  TabNavigator?: undefined,
  ChatScreen?: {userName: string, photo?: string},

};

const RootStack = createNativeStackNavigator<RootStackParamList>();

/*export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;*/



const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <RootStack.Screen name="IntroScreen01" component={IntroScreen01} />
        <RootStack.Screen name="IntroScreen02" component={IntroScreen02} />
        <RootStack.Screen name="LogInScreen" component={LogInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="TabNavigator" component={TabNavigator} />
        <RootStack.Screen name="ChatScreen" component={ChatScreen} />

      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;