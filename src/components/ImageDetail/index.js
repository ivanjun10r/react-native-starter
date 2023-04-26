import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

// eslint-disable-next-line react/prop-types
function ImageDetail({ title, imageSource, score }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.textStyle}>{`Image score - ${score}`}</Text>
    </View>
  );
}

export default ImageDetail;
