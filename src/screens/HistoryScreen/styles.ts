import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingBottom: hp(100),
  },
  header: {
    width: '100%',
    marginBottom: hp(20),
  },
  headerTitle: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(30),
  },
  listContent: {
    paddingBottom: hp(100),
    gap: hp(16),
  },
  card: {
    width: '100%',
    height: hp(200),
    paddingVertical: hp(12),
    paddingHorizontal: wp(12),
    marginBottom: hp(12),
  },
  cardContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    gap: wp(12),
  },
  cardLeftSection: {
    flex: 1,
    justifyContent: 'space-between',
  },
  dayTextContainer: {
    gap: hp(12),
  },
  dayText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(22),
  },
  descriptionText: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(12),
    flexShrink: 1,
  },
  shareButton: {
    width: '90%',
    height: hp(66),
    alignSelf: 'flex-start',
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
    textAlign: 'center',
  },
  cardRightSection: {
    flex: 1,
    borderRadius: wp(22),
    backgroundColor: COLORS.historyBrown,
    gap: hp(4),
    overflow: 'hidden',
  },
  taskImageContainer: {
    width: '100%',
    height: '60%',
    borderRadius: wp(12),
    overflow: 'hidden',
  },
  taskImage: {
    width: '100%',
    height: '100%',
  },
  userNoteContainer: {
    flexGrow: 1,
    padding: wp(8),
  },
  userNote: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(10),
    textAlign: 'left',
    width: '100%',
  },

  emptyCard: {
    marginTop: hp(140),
    width: '100%',
    height: hp(220),
    padding: 0,
    overflow: 'hidden',
  },
  emptyCardContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: wp(8),
  },
  emptyImageContainer: {
    width: wp(140),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  emptyImage: {
    width: '100%',
    height: '100%',
  },
  emptyTextContainer: {
    flex: 1,
    paddingTop: hp(30),
    paddingRight: hp(12),
  },
  emptyText: {
    fontSize: sp(15),
    color: COLORS.brown,
    textAlign: 'left',
  },
});
