import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { BTN_FRAME, ITEMS } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('OnboardingScreen3');
  };

  return (
    <View style={styles.container}>
      <View style={styles.womanWrapper}>
        <CustomContainer variant="yellow" extraStyle={styles.queenContainer}>
          <Image
            source={ITEMS.book}
            resizeMode="contain"
            style={styles.bookImage}
          />
        </CustomContainer>
      </View>
      <CustomContainer variant="onboarding" extraStyle={styles.bottomContainer}>
        <CustomText extraStyle={styles.title}>
          All your photos and entries are stored in a private weekly story,
          which only you can see.
        </CustomText>
        <CustomButton onPress={handleContinue} extraStyle={styles.button}>
          <ImageBackground
            source={BTN_FRAME}
            resizeMode="contain"
            style={styles.buttonImage}
          >
            <CustomText extraStyle={styles.buttonText}>Okay</CustomText>
          </ImageBackground>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default OnboardingScreen2;
