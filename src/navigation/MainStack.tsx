import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomTabBar } from 'src/components';
import {
  ExchangeScreen,
  HistoryScreen,
  HomeScreen,
  ProfileScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainNav = createBottomTabNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <MainNav.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <MainNav.Screen name="HomeScreen" component={HomeScreen} />
      <MainNav.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ title: 'History' }}
      />
      <MainNav.Screen
        name="ExchangeScreen"
        component={ExchangeScreen}
        options={{ title: 'Exchanger' }}
      />
      <MainNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </MainNav.Navigator>
  );
};

export default MainStack;
