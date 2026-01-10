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
    flex: 0.25,
    fontFamily: FONTS.InterRegular,
    fontSize: sp(11),
    color: COLORS.placeholderTextColor,
  },
  artefactsList: {
    flex: 0.75,
    flexDirection: 'row',
    gap: wp(8),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  artefactItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: wp(8),
  },
  artefactImage: {
    width: wp(24),
    height: wp(24),
  },
  artefactCount: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: sp(14),
  },
});
