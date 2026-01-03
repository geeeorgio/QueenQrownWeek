import type { NavigatorScreenParams } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import type { MainStackParamList } from './mainNav';
import type { OnboardingStackParamList } from './onbdNav';

export type RootStackParamList = {
  OnboardingStack: NavigatorScreenParams<OnboardingStackParamList>;
  RegistrationScreen: undefined;
  MainStack: NavigatorScreenParams<MainStackParamList>;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
