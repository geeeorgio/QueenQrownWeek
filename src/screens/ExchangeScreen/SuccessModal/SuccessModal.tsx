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

  const handleSharePress = async () => {
    await handleShare();
  };

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
        <Pressable style={styles.content} onPress={(e) => e.stopPropagation()}>
          {artefact && (
            <View style={styles.artefactContainer}>
              <Image
                source={artefact.image}
                style={styles.artefactImage}
                resizeMode="contain"
              />
            </View>
          )}

          <CustomContainer variant="yellow" extraStyle={styles.phraseCard}>
            <View
              style={[
                styles.phraseCardContent,
                isCrown && { flexDirection: 'column' },
              ]}
            >
              {!isCrown && (
                <View style={styles.queenImageContainer}>
                  <Image
                    source={QUEEN}
                    style={styles.queenImage}
                    resizeMode="contain"
                  />
                </View>
              )}

              <View
                style={[
                  styles.phraseTextContainer,
                  isCrown && styles.crownPhraseTextContainer,
                ]}
              >
                <ScrollView
                  showsVerticalScrollIndicator={isCrown}
                  contentContainerStyle={
                    isCrown && styles.crownPhraseTextContainerContent
                  }
                >
                  <CustomText
                    extraStyle={[
                      styles.phraseText,
                      isCrown && styles.crownPhraseText,
                    ]}
                  >
                    {exchangeItem.description}
                  </CustomText>
                </ScrollView>
              </View>
            </View>
          </CustomContainer>

          <View style={styles.buttonsContainer}>
            <CustomButton onPress={handleSharePress} extraStyle={styles.button}>
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
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SuccessModal;
