import React from 'react';
import { View } from 'react-native';

import styles from './styles';

function BoxScreen() {
  return (
    <View style={styles.parentStyle}>
      <View style={[styles.boxStyle, styles.viewOneStyle]} />
      <View style={[styles.boxStyle, styles.viewTwoStyle]} />
      <View style={[styles.boxStyle, styles.viewThreeStyle]} />
    </View>
  );
}

export default BoxScreen;
