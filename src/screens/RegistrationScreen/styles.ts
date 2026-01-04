import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registrationHeader: {
    width: '100%',
    height: hp(88),
    flexDirection: 'row',
    gap: wp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(44),
  },
  registrationHeaderLeft: {
    width: wp(88),
    height: '100%',
    borderRadius: wp(30),
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  registrationHeaderRight: {
    flex: 1,
  },
  registrationHeaderText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(18),
    textTransform: 'uppercase',
  },
  registrationForm: {
    width: '100%',
    gap: hp(16),
  },
  inputContainer: {
    width: '100%',
    paddingVertical: hp(12),
  },
  input: {
    width: '100%',
    fontFamily: FONTS.InterRegular,
    fontSize: sp(12),
    color: COLORS.white,
  },
  addPhotoContainer: {
    width: '100%',
    height: hp(200),
    justifyContent: 'center',
    gap: wp(12),
  },
  addPhotoText: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(14),
    textAlign: 'center',
  },
});
