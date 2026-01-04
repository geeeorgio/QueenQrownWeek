import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    gap: hp(40),
    paddingTop: hp(80),
  },
  womanWrapper: {
    paddingHorizontal: wp(24),
    flex: 0.65,
    width: '100%',
    justifyContent: 'center',
  },
  queenContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(14),
    textAlign: 'center',
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
  bottomContainer: {
    flex: 0.35,
    width: '100%',
    paddingHorizontal: wp(20),
    justifyContent: 'space-around',
    gap: hp(20),
    paddingBottom: hp(40),
  },
  title: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(20),
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: hp(80),
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: sp(20),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.brown,
    textAlign: 'center',
  },
});
