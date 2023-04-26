import React from 'react';
import { View } from 'react-native';

import ImageDetail from '../../components/ImageDetail';

import styles from './styles';

const forestImage = require('../../../assets/forest.jpg');
const beachImage = require('../../../assets/beach.jpg');
const mountainImage = require('../../../assets/mountain.jpg');

function ImageScreen() {
  return (
    <View style={styles.container}>
      <ImageDetail
        title="Forest"
        imageSource={forestImage}
        score={7}
      />
      <ImageDetail
        title="Beach"
        imageSource={beachImage}
        score={10}
      />
      <ImageDetail
        title="Mountain"
        imageSource={mountainImage}
        score={8}
      />
    </View>
  );
}

export default ImageScreen;
