import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: hp(100),
  },
  title: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(30),
    color: COLORS.white,
    marginBottom: hp(20),
    paddingHorizontal: wp(16),
  },
  content: {
    width: '100%',
    gap: hp(24),
  },
});
