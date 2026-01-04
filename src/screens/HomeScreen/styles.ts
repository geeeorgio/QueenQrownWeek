import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    width: '100%',
    gap: hp(24),
    paddingBottom: hp(100),
  },
  profileSection: {
    width: '100%',
    height: hp(80),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(18),
    marginBottom: hp(12),
  },
  profileImageContainer: {
    width: wp(80),
    height: '100%',
    borderRadius: wp(16),
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileImagePlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.brown,
  },
  profileTextContainer: {
    flex: 1,
    gap: hp(4),
  },
  greetingText: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(18),
  },
  complimentText: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(12),
  },
  infoButton: {
    width: wp(64),
    height: wp(64),
    borderRadius: wp(12),
    backgroundColor: COLORS.brown,
    borderColor: COLORS.yellowBorder,
    borderWidth: wp(1),
  },
  artefactsSection: {
    width: '100%',
    paddingVertical: hp(16),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
  },
  artefactsLabel: {
    flex: 0.2,
    fontFamily: FONTS.InterRegular,
    fontSize: sp(12),
    color: COLORS.placeholderTextColor,
  },
  artefactsList: {
    flex: 0.8,
    flexDirection: 'row',
    gap: wp(16),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  artefactItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(6),
  },
  artefactImage: {
    width: wp(30),
    height: wp(30),
  },
  artefactCount: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(22),
  },
  daySection: {
    width: '100%',
    paddingVertical: hp(16),
    gap: hp(16),
    alignItems: 'flex-start',
  },
  dayLabel: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(22),
  },
  dayButtons: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: wp(12),
  },
  dayButton: {
    width: wp(64),
    height: wp(64),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(1),
    borderColor: COLORS.yellowBorder,
    borderRadius: wp(12),
    backgroundColor: COLORS.yellowContainer,
  },
  dayButtonActive: {
    backgroundColor: COLORS.yellowMain,
    borderColor: COLORS.yellowMain,
  },
  dayTextContainer: {
    width: wp(32),
    height: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(16),
    padding: 0,
    backgroundColor: COLORS.brown,
  },
  dayButtonText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(20),
    textAlign: 'center',
  },
  taskCard: {
    width: '100%',
    minHeight: hp(200),
    maxHeight: hp(220),
  },
  taskCardContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    gap: wp(12),
    alignItems: 'center',
  },
  queenImageContainer: {
    width: wp(135),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },
  queenImage: {
    width: '100%',
    height: '100%',
    flexShrink: 0,
  },
  taskCardTextContainer: {
    flex: 1,
    gap: hp(12),
    justifyContent: 'center',
  },
  taskCardText: {
    fontSize: sp(15),
    color: COLORS.brown,
    textAlign: 'left',
  },
  startDayButton: {
    width: '100%',
    height: hp(56),
    marginTop: hp(4),
  },
  startDayButtonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startDayButtonText: {
    fontSize: sp(15),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.brown,
    textAlign: 'center',
  },
});
