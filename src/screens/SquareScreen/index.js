import React, { useReducer } from 'react';
import { View } from 'react-native';

import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;
const COLOR_MIN_LIMIT = 0;
const COLOR_MAX_LIMIT = 255;

const initialState = { red: 0, green: 0, blue: 0 };

const reachColorValueLimit = (value) => (value > COLOR_MAX_LIMIT || value < COLOR_MIN_LIMIT);

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  const { type, payload } = action;

  switch (type) {
    case 'change_red':
      return reachColorValueLimit(state.red + payload)
        ? state
        : { ...state, red: state.red + payload };
    case 'change_green':
      return reachColorValueLimit(state.green + payload)
        ? state
        : { ...state, green: state.green + payload };
    case 'change_blue':
      return reachColorValueLimit(state.blue + payload)
        ? state
        : { ...state, blue: state.blue + payload };
    default:
      return state;
  }
};

function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
}

export default SquareScreen;
