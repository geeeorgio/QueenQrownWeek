import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: hp(140),
  },
  scrollViewContent: {
    paddingBottom: hp(40),
  },
  registrationHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: hp(20),
  },
  registrationHeaderText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(26),
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
    fontSize: sp(11),
    color: COLORS.white,
  },
  addPhotoContainer: {
    width: '100%',
    height: hp(200),
    justifyContent: 'center',
    gap: wp(12),
    overflow: 'hidden',
  },
  previewImage: {
    ...StyleSheet.absoluteFillObject,
  },
  addPhotoText: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(12),
    textAlign: 'center',
  },
  saveButton: {
    width: '50%',
    height: hp(66),
    marginBottom: hp(20),
    alignSelf: 'center',
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
