import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnboardingStackParamList = {
  OnboardingScreen: undefined;
  OnboardingScreen1: undefined;
  OnboardingScreen2: undefined;
  OnboardingScreen3: undefined;
};

export type OnboardingStackNavigationProp =
  NativeStackNavigationProp<OnboardingStackParamList>;
