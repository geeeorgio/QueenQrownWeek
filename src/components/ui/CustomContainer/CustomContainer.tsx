import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
  variant?: 'default' | 'brown' | 'yellow' | 'green' | 'grey' | 'onboarding';
}

const CustomContainer = ({
  children,
  extraStyle,
  variant = 'brown',
}: CustomContainerProps) => {
  return (
    <View style={[styles.default, extraStyle, styles[variant]]}>
      {children}
    </View>
  );
};

export default CustomContainer;
