import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

function TextScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {
        password && password.length <= 5
          ? <Text>Password must be longer than 5 characters</Text>
          : null
      }
    </View>
  );
}

export default TextScreen;
