import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { BTN_FRAME, LOGO, QUEEN } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';
import { handleShare } from 'src/utils';

type GameInfoProps = {
  onClose: () => void;
};

const GameInfo = ({ onClose }: GameInfoProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleSharePress = async () => {
    await handleShare();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      onClose();
    });
    return () => {
      unsubscribe();
    };
  }, [navigation, onClose]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <CustomText extraStyle={styles.closeButtonText}>←</CustomText>
        </TouchableOpacity>
        <CustomText extraStyle={styles.headerText}>Information</CustomText>
      </View>

      <View style={styles.content}>
        <CustomContainer
          variant="yellow"
          extraStyle={[styles.cardContainer, styles.queenCardContainer]}
        >
          <View style={styles.imageSection}>
            <Image source={QUEEN} resizeMode="cover" style={styles.image} />
          </View>
          <View style={styles.textSection}>
            <CustomText extraStyle={styles.descriptionText}>
              Queen Qrown Week is a weekly app with daily beauty and mood
              challenges. Complete 4 challenges each day, add photos and save
              your story.
            </CustomText>
          </View>
        </CustomContainer>

        <CustomContainer variant="yellow" extraStyle={styles.cardContainer}>
          <View style={styles.logoImageSection}>
            <Image source={LOGO} resizeMode="contain" style={styles.image} />
          </View>
          <View style={styles.textSection}>
            <CustomText extraStyle={styles.descriptionText}>
              Collect artifacts and exchange them for motivational phrases from
              the Queen. All information remains only with you.
            </CustomText>
          </View>
        </CustomContainer>
      </View>

      <CustomButton onPress={handleSharePress} extraStyle={styles.shareButton}>
        <ImageBackground
          source={BTN_FRAME}
          resizeMode="contain"
          style={styles.shareButtonImage}
        >
          <CustomText extraStyle={styles.shareButtonText}>Share</CustomText>
        </ImageBackground>
      </CustomButton>
    </View>
  );
};

export default GameInfo;
