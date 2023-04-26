import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Decrease"
        onPress={() => setCounter(counter - 1)}
      />
      <Text style={styles.textStyle}>
        {`Current count: ${counter}`}
      </Text>
    </View>
  );
}

export default CounterScreen;
