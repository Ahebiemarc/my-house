import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle  } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../utils/constants/Colors";
import { IMessage } from "react-native-gifted-chat";


type ReplyMessageBarProps = {
  clearReply: () => void;
  message: IMessage | null;
    overflow?: ViewStyle['overflow'];
};

const ReplyMessageBar = ({ clearReply, message}: ReplyMessageBarProps) => {

    if (!message) {
        return null;
      }
  return (
    <View style={[styles.container]}>
      <View style={styles.replyIconContainer}>
        <MaterialIcons
          name="reply"
          size={25}
          color={Colors.skyBlue}
          style={{
            //width:25
          }}
        />
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.message}> {message?.text} </Text>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        style={styles.crossButton}
        onPress={clearReply}
      >
        <MaterialIcons
          name="close"
          size={25}
          color={Colors.skyBlue}
          style={{
            //width:25
          }}
        />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        //flex: 1,
        //height: 50,

    },
    replyIconContainer:{
        paddingLeft: 8,
        paddingRight: 6,
        borderRightWidth: 2,
        borderRightColor: '#2196F3',
        marginRight: 6,
        height: '100%',
        justifyContent: 'center',
    },
    crossButton:{
        paddingLeft: 8,
        paddingRight: 6,
        marginRight: 4,
    },
    messageContainer:{
        flex: 1,
    },
    message:{
        color: Colors.gray
    }
})

export default ReplyMessageBar;
