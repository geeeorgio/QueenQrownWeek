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
    backgroundColor: COLORS.yellowContainer,
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
    padding: wp(20),
    backgroundColor: COLORS.brown,
    borderTopLeftRadius: wp(22),
    borderTopRightRadius: wp(22),
    borderTopColor: COLORS.yellowBorder,
    borderTopWidth: wp(1.55),
    borderLeftColor: COLORS.yellowBorder,
    borderLeftWidth: wp(0.75),
    borderRightColor: COLORS.yellowBorder,
    borderRightWidth: wp(0.75),
  },
});
