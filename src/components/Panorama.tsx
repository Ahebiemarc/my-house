import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';


const widthWidow = Dimensions.get('window').width
interface PanoramaScreenProps {}

const imageUrl = require("../../assets/img/pfe/02-TUTO-PHOTO-360-VENISE.jpg")

const Panorama: React.FC<PanoramaScreenProps> = () => {
  const dimensions = { height: 200, width:widthWidow };
  const inputType = "mono";

  return (
    <View style={{ flex: 1 }}>
      <PanoramaView
        style={{ flex: 1 }}
        dimensions={dimensions}
        inputType={inputType}
        imageUrl={imageUrl}
      />
    </View>
  );
};

export default Panorama;
