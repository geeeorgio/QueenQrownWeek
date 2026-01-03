import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: wp(20),
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: COLORS.yellowBorder,
    borderWidth: wp(1),
    opacity: 0.25,
  },
  buttonFocused: {
    borderColor: COLORS.yellowBorder,
    opacity: 1,
  },
});
