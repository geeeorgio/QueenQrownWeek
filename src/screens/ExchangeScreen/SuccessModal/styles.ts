import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.modalBackground,
    paddingHorizontal: wp(20),
  },
  content: {
    width: '100%',
    alignItems: 'center',
    padding: hp(16),
    gap: hp(24),
    borderRadius: wp(14),
    backgroundColor: COLORS.brown,
    borderWidth: wp(1),
    borderColor: COLORS.containerBorder,
  },
  title: {
    fontFamily: FONTS.MontserratBold,
    fontSize: sp(28),
    marginBottom: hp(10),
    textAlign: 'center',
  },
  artefactContainer: {
    width: wp(100),
    height: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  artefactImage: {
    width: '80%',
    height: '80%',
  },
  queenImageContainer: {
    width: wp(100),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flexShrink: 0,
  },
  queenImage: {
    width: '100%',
    height: '100%',
  },
  phraseCard: {
    width: '100%',
    height: hp(160),
    padding: 0,
    overflow: 'hidden',
  },
  crownPhraseCard: {
    height: hp(250),
  },
  phraseCardContent: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    gap: wp(12),
    alignItems: 'center',
  },
  crownPhraseTextContainer: {
    width: '100%',
    flex: 1,
  },
  phraseTextContainer: {
    flex: 1,
    padding: wp(10),
    height: '100%',
  },
  crownPhraseTextContainerContent: {
    paddingVertical: wp(10),
  },
  phraseText: {
    fontSize: sp(14),
    color: COLORS.brown,
    textAlign: 'left',
  },
  crownPhraseText: {
    fontSize: sp(12),
  },
  buttonsContainer: {
    width: '100%',
    gap: hp(16),
  },
  button: {
    width: '100%',
    height: hp(66),
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
