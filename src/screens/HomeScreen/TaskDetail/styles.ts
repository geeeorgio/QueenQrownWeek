import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal: wp(16),
    paddingTop: hp(60),
    paddingBottom: hp(40),
  },
  scrollContent: {
    width: '100%',
    paddingVertical: hp(16),
    gap: hp(20),
    marginBottom: hp(40),
  },
  header: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(12),
    marginBottom: hp(10),
  },
  taskNumberContainer: {
    width: wp(64),
    height: wp(64),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(12),
    borderColor: COLORS.yellowMain,
  },
  taskNumberContent: {
    width: wp(32),
    height: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(16),
    backgroundColor: COLORS.brown,
  },
  taskNumberText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(22),
    textAlign: 'center',
  },
  headerText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(22),
  },
  taskDescriptionCard: {
    width: '100%',
    borderRadius: wp(24),
    overflow: 'hidden',
    padding: 0,
  },
  taskDescriptionContent: {
    width: '100%',
    height: hp(120),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(10),
  },
  queenImageContainer: {
    width: wp(90),
    height: '100%',
    flexShrink: 0,
  },
  queenImage: {
    width: '100%',
    height: '100%',
  },
  taskDescriptionTextContainer: {
    flex: 1,
    paddingRight: wp(12),
  },
  taskDescriptionText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(14),
    color: COLORS.brown,
  },
  aboutTaskSection: {
    width: '100%',
    gap: hp(10),
  },
  aboutTaskLabel: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(14),
    color: COLORS.placeholderTextColor,
    marginLeft: wp(4),
  },
  aboutTaskInputContainer: {
    width: '100%',
    minHeight: hp(110),
    borderRadius: wp(16),
    padding: wp(16),
  },
  aboutTaskInput: {
    width: '100%',
    fontFamily: FONTS.InterRegular,
    fontSize: sp(12),
    textAlignVertical: 'top',
    color: COLORS.white,
  },
  photoSection: {
    width: '100%',
    gap: hp(10),
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
    fontSize: sp(14),
    textAlign: 'center',
  },
  completeButton: {
    marginBottom: hp(20),
    width: '50%',
    height: hp(66),
    alignSelf: 'center',
  },
  completeButtonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.brown,
  },
  photoContainer: {
    width: '100%',
    height: hp(240),
    borderRadius: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
