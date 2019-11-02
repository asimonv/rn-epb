import { StyleSheet } from 'react-native';
import { colors, button } from './common.style';

export const buttons = StyleSheet.create({

  primary: {
    ...button,
    backgroundColor: '#007AFF',
    borderColor: 'white',
    color: 'white',

  },
  url: {
    marginVertical: 5,
    color: colors.system,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  disabled: {
    ...button,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    color: 'gray',
  },
  secondary: {
    ...button,
    backgroundColor: colors.warning,
    color: 'white',
    borderWidth: 0,
  },
});
