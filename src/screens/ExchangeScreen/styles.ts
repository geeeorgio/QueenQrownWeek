import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: hp(100),
  },
  title: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(26),
    marginBottom: hp(20),
  },
  content: {
    width: '100%',
    gap: hp(24),
  },
});
