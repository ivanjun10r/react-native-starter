import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

function ComponentsScreen() {
  const name = 'Ivan Júnior';

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>
        {`My name is ${name}`}
      </Text>
    </View>
  );
}

export default ComponentsScreen;
