import React, { useReducer } from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

const COUNTER_INCREMENT = 10;

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'change_counter', payload: COUNTER_INCREMENT || - COUNTER_INCREMENT }
  const { type, payload } = action;
  if (type === 'change_counter') {
    return {
      ...state,
      counter: state.counter + payload,
    };
  }
  return state;
};

function CounterV2Screen() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'change_counter', payload: COUNTER_INCREMENT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'change_counter', payload: -1 * COUNTER_INCREMENT })}
      />
      <Text style={styles.textStyle}>
        {`Current count: ${counter}`}
      </Text>
    </View>
  );
}

export default CounterV2Screen;
