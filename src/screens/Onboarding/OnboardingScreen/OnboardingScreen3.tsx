import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { BTN_FRAME, ITEMS } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const OnboardingScreen3 = () => {
  const { setIsContextOnboardingCompleted } = useGameContext();

  const handleContinue = () => {
    setIsContextOnboardingCompleted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.womanWrapper}>
        <CustomContainer variant="yellow" extraStyle={styles.queenContainer}>
          <Image
            source={ITEMS.lock}
            resizeMode="contain"
            style={styles.bookImage}
          />
          <CustomText extraStyle={styles.subtitle}>
            We do not collect any information about you.
          </CustomText>
        </CustomContainer>
      </View>
      <CustomContainer variant="onboarding" extraStyle={styles.bottomContainer}>
        <CustomText extraStyle={styles.title}>
          For your activity you receive artifacts: scarab, pyramid, flower.
          Exchange them for motivational phrases from the Queen.
        </CustomText>
        <CustomButton onPress={handleContinue} extraStyle={styles.button}>
          <ImageBackground
            source={BTN_FRAME}
            resizeMode="contain"
            style={styles.buttonImage}
          >
            <CustomText extraStyle={styles.buttonText}>Start</CustomText>
          </ImageBackground>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default OnboardingScreen3;
