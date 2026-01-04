import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  closeButton: {
    paddingHorizontal: wp(12),
    paddingVertical: hp(6),
    borderRadius: wp(12),
    backgroundColor: COLORS.brown,
    borderColor: COLORS.yellowBorder,
    borderWidth: wp(1),
    marginRight: wp(16),
  },
  closeButtonText: {
    fontFamily: FONTS.MontserratBold,
    color: COLORS.yellowMain,
    fontSize: sp(16),
    textTransform: 'uppercase',
  },
  headerText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(30),
    color: COLORS.white,
  },
  content: {
    width: '100%',
    gap: hp(20),
    marginBottom: hp(40),
  },
  cardContainer: {
    width: '100%',
    minHeight: hp(140),
    maxHeight: hp(200),
    flexDirection: 'row',
    padding: 0,
    overflow: 'hidden',
  },
  queenCardContainer: {
    alignItems: 'flex-start',
  },
  imageSection: {
    width: wp(140),
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logoImageSection: {
    width: wp(100),
    height: wp(100),
    overflow: 'hidden',
    borderWidth: wp(1),
    borderColor: COLORS.yellowBorder,
    borderRadius: wp(25),
  },
  textSection: {
    flex: 1,
    padding: wp(12),
  },
  descriptionText: {
    fontSize: sp(12),
    color: COLORS.brown,
  },
  shareButton: {
    width: wp(160),
    height: hp(54),
    alignSelf: 'center',
  },
  shareButtonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.brown,
  },
});
