import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: wp(12),
  },
  brown: {
    backgroundColor: COLORS.brown,
    borderWidth: wp(1),
    borderColor: COLORS.containerBorder,
    borderRadius: wp(12),
  },
  yellow: {
    backgroundColor: COLORS.yellowBackground,
    borderWidth: wp(1),
    borderColor: COLORS.yellowBorder,
    borderRadius: wp(20),
  },
  green: {
    backgroundColor: COLORS.greenBackground,
    borderWidth: wp(1),
    borderColor: COLORS.yellowBorder,
    borderRadius: wp(16),
  },
  grey: {
    padding: wp(16),
    backgroundColor: COLORS.greyBackground,
    borderRadius: wp(16),
  },
  onboarding: {
    padding: wp(16),
    backgroundColor: COLORS.brown,
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
    borderTopColor: COLORS.yellowMain,
    borderTopWidth: wp(1),
    borderLeftColor: COLORS.yellowMain,
    borderLeftWidth: wp(1),
    borderRightColor: COLORS.yellowMain,
    borderRightWidth: wp(1),
  },
});
