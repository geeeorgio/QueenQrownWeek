import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { sp, hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
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
});
