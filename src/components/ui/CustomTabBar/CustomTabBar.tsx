import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import React from 'react';

import CustomContainer from '../CustomContainer/CustomContainer';

import { styles } from './styles';

import { COLORS, TAB_BAR_ICONS } from 'src/constants';
import type { MainStackParamList } from 'src/types';

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <CustomContainer extraStyle={styles.container} variant="onboarding">
      {props.state.routes.map((route, idx) => {
        const routeName = route.name as keyof MainStackParamList;
        const Icon = TAB_BAR_ICONS[routeName];

        const isFocused = props.state.index === idx;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if (!Icon) return null;

        return (
          <PlatformPressable
            key={route.key}
            accessibilityLabel={
              props.descriptors[route.key].options.tabBarAccessibilityLabel
            }
            accessibilityRole="button"
            accessibilityState={{ selected: isFocused }}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.button, isFocused && styles.buttonFocused]}
          >
            <Icon color={COLORS.yellowMain} style={styles.icon} />
          </PlatformPressable>
        );
      })}
    </CustomContainer>
  );
};

export default CustomTabBar;
