import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  boxStyle: {
    height: 100,
    width: 100,
  },
  viewOneStyle: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
  viewTwoStyle: {
    borderColor: 'green',
    backgroundColor: 'green',
    marginTop: 100,
  },
  viewThreeStyle: {
    borderColor: 'purple',
    backgroundColor: 'purple',
  },
});

export default styles;
