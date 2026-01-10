import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  contentContainer: {
    gap: hp(16),
    paddingBottom: hp(20),
  },
  list: {
    width: '100%',
  },
  listFooter: {
    height: hp(200),
  },
  itemContainer: {
    width: '100%',
    padding: wp(16),
    minHeight: hp(180),
  },
  itemContent: {
    width: '100%',
    gap: hp(12),
  },
  itemHeader: {
    width: '100%',
    gap: hp(6),
  },
  itemTitle: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(20),
  },
  itemDescription: {
    fontFamily: FONTS.InterRegular,
    fontSize: sp(11),
  },
  crownImageContainer: {
    width: '100%',
    height: hp(111),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(8),
  },
  crownImage: {
    width: '80%',
    height: '80%',
  },
  actionRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: wp(24),
    marginTop: hp(8),
  },
  exchangeButton: {
    flex: 0.6,
    height: hp(66),
    maxWidth: wp(166),
  },
  exchangeButtonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exchangeButtonText: {
    fontSize: sp(16),
    fontFamily: FONTS.MontserratBold,
    color: COLORS.brown,
    textAlign: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  priceContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(12),
  },
  priceText: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(22),
  },
  priceIcon: {
    width: wp(30),
    height: wp(30),
  },
});
