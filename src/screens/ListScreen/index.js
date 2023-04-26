import React from 'react';
import { FlatList, Text } from 'react-native';

import styles from './styles';

function ListScreen() {
  const name = 'Ivan Júnior';
  const age = 25;

  const friends = [
    { name, age },
    { name: 'Friend #1', age: 21 },
    { name: 'Friend #2', age: 24 },
    { name: 'Friend #3', age: 23 },
    { name: 'Friend #4', age: 20 },
    { name: 'Friend #5', age: 22 },
    { name: 'Friend #6', age: 29 },
    { name: 'Friend #7', age: 27 },
    { name: 'Friend #8', age: 25 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>
          {`${item.name} - Age: ${item.age}`}
        </Text>
      )}
    />
  );
}

export default ListScreen;
