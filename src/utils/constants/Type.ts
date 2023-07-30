import {
    NativeStackScreenProps,
  } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../../navigators/RootNavigator";


export type minMaxImg = [any, any, any, any]
            | [any, any, any, any, any]
            | [any, any, any, any, any, any]
            | [any, any, string, any, any, any, any]
            | [any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, string, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any]
            | [any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any];



export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>

export type LogInScreenProps = NativeStackScreenProps<RootStackParamList, 'LogInScreen'>;