import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  OnboardingScreen,
  OnboardingScreen1,
  OnboardingScreen2,
  OnboardingScreen3,
} from 'src/screens';
import type { OnboardingStackParamList } from 'src/types';

const OnbdStack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <OnbdStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'slide_from_right',
      }}
    >
      <OnbdStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <OnbdStack.Screen
        name="OnboardingScreen1"
        component={OnboardingScreen1}
      />
      <OnbdStack.Screen
        name="OnboardingScreen2"
        component={OnboardingScreen2}
      />
      <OnbdStack.Screen
        name="OnboardingScreen3"
        component={OnboardingScreen3}
      />
    </OnbdStack.Navigator>
  );
};

export default OnboardingStack;
