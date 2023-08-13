import React, { FC, useRef, useState } from "react";
import {
  Image,
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
} from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Colors from "../../utils/constants/Colors";
import { minMaxImg } from "../../utils/constants/Type";
import { imagesT } from "../../utils/Data";

const { width, height } = Dimensions.get("window");

const ITEM_WIDTH: number = width;
const ITEM_HEIGHT: number = height * 0.75;
const CARD_WIDTH: number = ITEM_WIDTH;
const SPACING: number = 0.1;
const DOT_SIZE: number = 6;
const DOT_SPACING: number = 2;
const DOT_INDICATOR: number = DOT_SIZE + DOT_SPACING + 2;
const SPACING_INDICATOR: number = 5;


//const indicate = imagesT.length;

const product = {
  location: "Berlin, German",
  title: "Single Appart",
  date: "10 Oct 2023",
  rent: "Month",
  description: [
    "Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.",
    'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"',
  ],
  price: "118 dt",
};

export const indicatonPosition = (X: number) => {
  if (X == 4) {
    return 218;
  } else if (X == 5) {
    return 218 - SPACING_INDICATOR;
  } else if (X == 6) {
    return 213 - SPACING_INDICATOR;
  } else if (X == 7) {
    return 208 - SPACING_INDICATOR;
  } else if (X == 8) {
    return 203 - SPACING_INDICATOR;
  } else if (X == 9) {
    return 198 - SPACING_INDICATOR;
  } else if (X == 10) {
    return 193 - SPACING_INDICATOR;
  } else if (X == 11) {
    return 188 - SPACING_INDICATOR;
  } else if (X == 12) {
    return 183 - SPACING_INDICATOR;
  } else if (X == 13) {
    return 178 - SPACING_INDICATOR;
  } else if (X == 14) {
    return 173 - SPACING_INDICATOR;
  } else if (X == 15) {
    return 168 - SPACING_INDICATOR;
  } else if (X == 16) {
    return 163 - SPACING_INDICATOR;
  } else if (X == 17) {
    return 158 - SPACING_INDICATOR;
  }
};

interface cardProps {
  location: string;
  title: string;
  date: string;
  rent: string;
  price: string;
  onPress: () => void;
  images: minMaxImg[];
}

const Card: FC<cardProps> = ({ location, title, date, rent, price, onPress, images }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const scrollX = useRef(new Animated.Value(0)).current;

  const handleFavoritePress = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };
  return (
  
      <View
      style={{
        marginBottom: 48,
        //marginTop: -10,
        //height: ITEM_HEIGHT - 310,
      }}
      >
      <View
        style={{
          height: ITEM_HEIGHT - 310,
          overflow: "hidden",
          marginHorizontal: 13,
          borderRadius: 10,
        }}
      >
        <Animated.FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={CARD_WIDTH + SPACING}
          decelerationRate="fast"
          pagingEnabled
          horizontal={true} // Défilement horizontal
          showsHorizontalScrollIndicator={false} // Cacher l'indicateur de défilement horizontal
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
              activeOpacity={1}
              onPress={onPress}
              >
                <Image source={item} style={styles.cardImage} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.pagination}>
        {images.map((_, index) => {
          return <View key={index} style={[styles.dot]} />;
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateX: scrollX.interpolate({
                    inputRange: [0, ITEM_WIDTH],
                    outputRange: [0, DOT_INDICATOR],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.favoriteIconContainer}
        onPress={handleFavoritePress}
      >
        <Icons
          name="favorite"
          size={30}
          color={isFavorite ? Colors.lightRed : "white"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={styles.cardDesc}
      >
        <View>
          <View style={styles.location}>
            <Icons
              name="location-pin"
              size={20}
              style={{
                marginRight: SPACING + 5,
              }}
            />
            <Text
              style={{
                marginTop: SPACING + 5,
                fontSize: 14,
                color: Colors.dark,
                fontWeight: "bold",
              }}
            >
              {location}
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginBottom: SPACING + 10,
                fontSize: 14,
                color: Colors.darkGray,
                fontWeight: "400",
              }}
            >
              {date} {title}
            </Text>
            <Text
              style={{
                //fontSize: 14,
                color: Colors.dark,
                fontWeight: "600",
              }}
            >
              {price} {rent}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Icons
            name="star"
            size={18}
            color={Colors.dark}
            style={{
              marginRight: SPACING + 3,
            }}
          />
          <Text
            style={{
              marginTop: SPACING + 2,
            }}
          >
            5.0
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT - 310,
    resizeMode: "cover",
  },
  favoriteIconContainer: {
    position: "absolute",
    top: 15,
    right: 40,
  },
  favoriteIconRed: {
    backgroundColor: "red",
  },
  favoriteIconTransparent: {
    backgroundColor: "transparent",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: Colors.darkGray,
    marginHorizontal: DOT_SPACING,
  },
  dotIndicator: {
    position: "absolute",
    justifyContent: "center",
    top: 0,
    left: indicatonPosition(imagesT.length), //(images.length-1) + (213-(images.length-1)),
    //left: (DOT_SIZE + DOT_SPACING) * (images.length - 1), // Calculer le marginLeft en fonction de la taille du tableau
    width: DOT_INDICATOR,
    height: DOT_INDICATOR,
    borderRadius: DOT_INDICATOR,
    borderWidth: 1,
    borderColor: Colors.lightRed,

    marginTop: -(DOT_SIZE - 4),
    marginLeft: -(DOT_SIZE + 44),
  },
  cardDesc: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SPACING + 25,
  },
  location: {
    flexDirection: "row",
    marginBottom: SPACING + 4,
  },
});

export default Card;
