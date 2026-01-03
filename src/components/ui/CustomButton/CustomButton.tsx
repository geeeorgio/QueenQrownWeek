import type { ReactNode } from 'react';
import React from 'react';
import type { Insets, StyleProp, ViewStyle } from 'react-native';
import { Pressable } from 'react-native';

import { styles } from './styles';

interface CustomButtonProps {
  children: ReactNode;
  variant?: 'default' | 'frame' | 'icon';
  onPress: () => void;
  extraStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  distance?: Insets;
}

const CustomButton = ({
  children,
  variant = 'default',
  onPress,
  extraStyle,
  disabled = false,
  distance = { top: 10, bottom: 10, left: 10, right: 10 },
}: CustomButtonProps) => {
  return (
    <Pressable
      style={[styles.default, styles[variant], extraStyle]}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      hitSlop={distance}
    >
      {children}
    </Pressable>
  );
};

export default CustomButton;
