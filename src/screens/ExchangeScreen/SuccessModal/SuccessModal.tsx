import React from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  View,
} from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ARTEFACTS, BTN_FRAME, QUEEN } from 'src/constants';
import type { ArtefactIdType, ExchangeItemType } from 'src/types';
import { handleShare } from 'src/utils';

interface SuccessModalProps {
  visible: boolean;
  artefactType: ArtefactIdType;
  exchangeItem: ExchangeItemType | null;
  onClose: () => void;
}

const SuccessModal = ({
  visible,
  artefactType,
  exchangeItem,
  onClose,
}: SuccessModalProps) => {
  if (!exchangeItem) return null;

  const isCrown = artefactType === 'Crown';
  const artefact = ARTEFACTS.find((a) => a.id === artefactType);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <CustomText extraStyle={styles.title}>Successfully!</CustomText>
        <View
          style={styles.content}
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          {artefact && (
            <View style={styles.artefactContainer}>
              <Image
                source={artefact.image}
                style={styles.artefactImage}
                resizeMode="contain"
              />
            </View>
          )}

          <CustomContainer
            variant="yellow"
            extraStyle={[styles.phraseCard, isCrown && styles.crownPhraseCard]}
          >
            {isCrown ? (
              <ScrollView
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={styles.crownPhraseTextContainerContent}
              >
                <Pressable onPress={() => {}} style={{ width: '100%' }}>
                  <CustomText
                    extraStyle={[styles.phraseText, styles.crownPhraseText]}
                  >
                    {exchangeItem.description}
                  </CustomText>
                </Pressable>
              </ScrollView>
            ) : (
              <View style={styles.phraseCardContent}>
                <View style={styles.queenImageContainer}>
                  <Image
                    source={QUEEN}
                    style={styles.queenImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.phraseTextContainer}>
                  <CustomText extraStyle={styles.phraseText}>
                    {exchangeItem.description}
                  </CustomText>
                </View>
              </View>
            )}
          </CustomContainer>

          <View style={styles.buttonsContainer}>
            <CustomButton
              onPress={() => handleShare()}
              extraStyle={styles.button}
            >
              <ImageBackground
                source={BTN_FRAME}
                resizeMode="contain"
                style={styles.buttonImage}
              >
                <CustomText extraStyle={styles.buttonText}>Share</CustomText>
              </ImageBackground>
            </CustomButton>
            <CustomButton onPress={onClose} extraStyle={styles.button}>
              <ImageBackground
                source={BTN_FRAME}
                resizeMode="contain"
                style={styles.buttonImage}
              >
                <CustomText extraStyle={styles.buttonText}>Close</CustomText>
              </ImageBackground>
            </CustomButton>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default SuccessModal;
