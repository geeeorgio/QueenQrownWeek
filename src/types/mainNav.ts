import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  HomeScreen: undefined;
  HistoryScreen: undefined;
  ExchangeScreen: undefined;
  ProfileScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;
