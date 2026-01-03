import type { SvgProps } from 'react-native-svg';

import {
  ExchangeIcon,
  HistoryIcon,
  HomeIcon,
  ProfileIcon,
} from 'src/components';
import type { MainStackParamList } from 'src/types';

type IconComponent = React.ComponentType<SvgProps>;

export const TAB_BAR_ICONS: Record<keyof MainStackParamList, IconComponent> = {
  HomeScreen: HomeIcon,
  HistoryScreen: HistoryIcon,
  ExchangeScreen: ExchangeIcon,
  ProfileScreen: ProfileIcon,
};
