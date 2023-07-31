import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Colors from "../utils/constants/Colors";

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width;

export const container = {
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  alignItems: "center" as const,
  backgroundColor: Colors.white,
};

export const card = {
  width: ITEM_WIDTH - 10,
};

export const userInfo = {
  flexDirection: "row" as const,
  justifyContent: "space-between" as const,
};

export const userImgWrapper = {
  paddingTtop: 15,
  paddingBottom: 15,
};

export const userImg = {
  width: 50,
  height: 50,
  borderRadius: 25,
  position: "absolute" as const,
  top: 14,
};

export const textSection = {
  flexDirection: "column" as const,
  justifyContent: "center" as const,
  padding: 15,
  paddingLeft: 0,
  marginLeft: 10,
  width: 300,
  borderBottomWidth: 1,
  borderBottomColor: Colors.skyBlue,
};

export const userInfoText = {
  flexDirection: "row" as const,
  justifyContent: "space-between" as const,
  marginBottom: 5,
};

export const userName = {
  fontSize: 14,
  fontWeight: "bold" as const,
  //fontFamily: 'Lato-Regular',
};

export const postTime = {
  fontSize: 12,
  color: Colors.green,
  //fontFamily: 'Lato-Regular',
};

export const messageText = {
  fontSize: 14,
  color: Colors.darkGray,
};


