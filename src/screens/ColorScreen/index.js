import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const renderColorItem = ({ item }) => (
  <View style={{ height: 100, width: 100, backgroundColor: item }} />
);

function ColorScreen() {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={renderColorItem}
      />
    </View>
  );
}

export default ColorScreen;
