import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { BTN_FRAME, ITEMS } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const handleContinue = () => {
    navigation.navigate('OnboardingScreen2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.womanWrapper}>
        <CustomContainer variant="yellow" extraStyle={styles.queenContainer}>
          <Image
            source={ITEMS.taskCard}
            resizeMode="contain"
            style={styles.itemImage}
          />
        </CustomContainer>
      </View>
      <CustomContainer variant="onboarding" extraStyle={styles.bottomContainer}>
        <CustomText extraStyle={styles.title}>
          Every day you receive one easy task. Complete it, add a photo and a
          short description.
        </CustomText>
        <CustomButton onPress={handleContinue} extraStyle={styles.button}>
          <ImageBackground
            source={BTN_FRAME}
            resizeMode="contain"
            style={styles.buttonImage}
          >
            <CustomText extraStyle={styles.buttonText}>Next</CustomText>
          </ImageBackground>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default OnboardingScreen1;
