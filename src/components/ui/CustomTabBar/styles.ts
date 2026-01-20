import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: hp(30),
    paddingBottom: hp(80),
    paddingHorizontal: wp(30),
    gap: wp(16),
    backgroundColor: COLORS.redTabBar,
    borderRadius: wp(16),
    borderWidth: wp(1),
    borderColor: COLORS.containerBorder,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(20),
    borderRadius: wp(12),
    borderWidth: wp(1),
    borderColor: COLORS.newText,
    opacity: 0.33,
  },
  buttonFocused: {
    flex: 1,
    borderWidth: wp(1),
    borderColor: COLORS.newText,
    opacity: 1,
  },
  icon: {
    width: wp(22),
    height: wp(22),
  },
});
