import React, { FC, useState, useCallback, useEffect  } from 'react'
import { Text, View, StyleSheet, Platform, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
Animated
import { Bubble, Composer, GiftedChat, IMessage, InputToolbar, Send } from 'react-native-gifted-chat';
import Animated, { FadeInUp } from 'react-native-reanimated';
import {MaterialIcons} from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { RootStackParamList } from '../navigators/RootNavigator';
import {
    NativeStackScreenProps,   
  } from "@react-navigation/native-stack";
import Colors from '../utils/constants/Colors';
//import {  } from 'react-native-size-matters';


const {height } = Dimensions.get('window');



type ChatScreenProps = NativeStackScreenProps<RootStackParamList, 'ChatScreen'>



type ChatScreenRouteParams = {
    userName: string;
    photo: string;
  };

const ChatScreen: React.FC<ChatScreenProps> = ({navigation, route}) => {

    const [messages, setMessages] = useState<IMessage[]>([])
    const theme = useTheme()
    const [isTyping, setIsTyping] = useState(false);
    const [onFocus, setOnFocus] = useState(false)
    const [inputToolbarHeight, setInputToolbarHeight] = useState(-10);
    // Utilisez route.params pour accéder aux paramètres passés à l'écran
    const {userName, photo} = route.params as ChatScreenRouteParams

  
    
    // fonction d'envoi de message
    const onSend = useCallback((newMessages: IMessage[]) => {
      setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
      
      }, [])

     // Fonction de génération de message aléatoire (pour simuler les messages reçus)
    const generateRandomMessage = () :IMessage => {
        const randomID:number  = Math.floor(Math.random() * 1000000);
        const randomMessage: IMessage = {
            _id: randomID.toString(),
            text: 'Ceci est un message de test',
            createdAt: new Date(),
            user: {
                _id: 2, //  ID Friend
                name: userName,
                avatar: photo
            },

        };
        return randomMessage;
    };

    // Simuler un message reçu après un court délai
    const simulateReceivedMessage = () =>{
      setIsTyping(true);
      //onSend([]);
      setTimeout(() => {
        const randomMessage: IMessage = generateRandomMessage();
        setIsTyping(false);
        onSend([randomMessage]);
      }, 2000); // Délai de 2 secondes avant d'envoyer le message généré aléatoirement
    }

    // Utiliser useEffect pour démarrer l'intervalle de simulation lors du montage de l'écran

    useEffect(() => {
        const interval = setInterval(simulateReceivedMessage, 5000);
        //setIsTyping(isTyping)
        return () => clearInterval(interval); // Nettoyer l'intervalle lors du démontage de l'écran

    }, [])


    const renderBubble = (props: any) => {

      return(
        <Bubble 
          {...props}
          wrapperStyle={{
            /*right: {
              backgroundColor: Colors.skyBlue
            },*/
            /*left: {
              backgroundColor: Colors.green2
            }*/
          }}
          textStyle={{
            /*right:{
              color: Colors.white
            },
            left:{
              color: Colors.white
            },*/
          }}
        />
      )
    }

    const renderInputToolbar = (props: any) =>{
      return (
        
      <InputToolbar
          {...props}
          containerStyle = {{
            flexDirection: 'column-reverse',
            marginLeft: 15,
            marginRight: 15,
            backgroundColor: Colors.white,
            alignContent: "center",
            justifyContent: "center",
            borderWidth: 0,
            paddingTop: 6,
            borderRadius: 30,
            borderTopColor: "transparent",
            paddingLeft: 10,
            marginBottom: 0,
          }}
        />

      );
    }

    const renderSend = (props: any) =>{
      return (
        <Send {...props}>
          <View>
            <MaterialIcons 
              name='send'
              color={Colors.skyBlue}
              size={25}
              style={{
                bottom: 5
              }}
            />
          </View>

        </Send>
      )
    }

    const renderComposer = (props: any) => {
      return (
        <Composer
          {...props}
          textInputProps={{
            onFocus: () => setInputToolbarHeight(20),
          }}
        />
      );
    };

    const scrollToBottomComponent =  () => {
      return(
        <MaterialIcons
        name='keyboard-arrow-down'
        size={30}
        color={Colors.lightRed}
        />
      );
    };
    
  return (
    <SafeAreaView
    style={{
        flex: 1
    }}>

        <Animated.View
          entering={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 40,
            alignItems: "center",
            flexDirection: "row",
            //backgroundColor: Colors.gray,
            marginVertical: 10,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={25} color={theme.colors.text} />
          </TouchableOpacity>
          <Text
           style={{
            fontSize: 20,
            fontWeight: '500',
            position: 'absolute',
            top: 15,
            right: 150
           }}
          > {userName} </Text>
        </Animated.View>

        <GiftedChat 
            messages={messages}
            onSend={onSend}
            user={{
                _id: '1', // ID de l'utilisateur "Moi" (expéditeur des messages)
                name: 'Moi'
            }}
            renderBubble={renderBubble}
            
            renderInputToolbar={renderInputToolbar}
            alwaysShowSend={true}
            //style={{ bottom: height * 0.03 }}
            renderSend={renderSend}
            isTyping={isTyping}
            renderComposer={renderComposer}
            bottomOffset={inputToolbarHeight}
            //onInputTextChanged={onInputTextChanged}
            scrollToBottom={true}
            scrollToBottomComponent={scrollToBottomComponent}
            textInputProps={{
              fontSize: 20,
            }}
        />

        {/*Platform.OS === 'android' && <KeyboardAvoidingView behavior='padding' />*/}

    </SafeAreaView>
  );
};




export default ChatScreen;