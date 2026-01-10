import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: hp(40),
    paddingTop: hp(88),
  },
  womanWrapper: {
    paddingHorizontal: wp(24),
    flex: 0.67,
    width: '100%',
    justifyContent: 'center',
  },
  queenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  queenImage: {
    width: '100%',
    height: '100%',
  },
  itemImage: {
    width: '75%',
    height: '75%',
    transform: [{ rotate: '15deg' }],
  },
  bookImage: {
    width: '75%',
    height: '75%',
  },
  title: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(16),
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(11),
    textAlign: 'center',
  },
  bottomContainer: {
    flex: 0.33,
    width: '100%',
    paddingHorizontal: wp(20),
    justifyContent: 'space-evenly',
    gap: hp(20),
    paddingBottom: hp(66),
  },
  button: {
    width: '100%',
    height: hp(66),
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(16),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.brown,
    textAlign: 'center',
  },
});
