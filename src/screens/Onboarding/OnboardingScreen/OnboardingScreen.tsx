import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { BTN_FRAME, QUEEN } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('OnboardingScreen1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.womanWrapper}>
        <CustomContainer variant="yellow" extraStyle={styles.queenContainer}>
          <Image
            source={QUEEN}
            resizeMode="contain"
            style={styles.queenImage}
          />
        </CustomContainer>
      </View>
      <CustomContainer variant="onboarding" extraStyle={styles.bottomContainer}>
        <CustomText extraStyle={styles.title}>
          Welcome to Queen Qrown Week. Here you will spend your week of beauty
          and strength with the Queen.
        </CustomText>
        <CustomButton onPress={handleContinue} extraStyle={styles.button}>
          <ImageBackground
            source={BTN_FRAME}
            resizeMode="contain"
            style={styles.buttonImage}
          >
            <CustomText extraStyle={styles.buttonText}>Continue</CustomText>
          </ImageBackground>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default OnboardingScreen;
