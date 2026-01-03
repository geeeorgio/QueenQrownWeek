import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './MainStack';
import OnboardingStack from './OnboardingStack';

import { useGameContext } from 'src/hooks/useGameContext';
import { RegistrationScreen } from 'src/screens';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isContextOnboardingCompleted, isContextRegistrationCompleted } =
    useGameContext();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      {!isContextOnboardingCompleted ? (
        <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
      ) : !isContextRegistrationCompleted ? (
        <RootStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
      ) : (
        <RootStack.Screen name="MainStack" component={MainStack} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
