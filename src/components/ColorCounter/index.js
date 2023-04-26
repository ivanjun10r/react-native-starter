import React from 'react';
import { Button, Text, View } from 'react-native';

// eslint-disable-next-line react/prop-types
function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => onIncrease()}
        title={`Increase ${color}`}
      />
      <Button
        onPress={() => onDecrease()}
        title={`Decrease ${color}`}
      />
    </View>
  );
}

export default ColorCounter;
