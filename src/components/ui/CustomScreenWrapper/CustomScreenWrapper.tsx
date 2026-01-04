import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface CustomScreenWrapperProps {
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const CustomScreenWrapper = ({
  children,
  extraStyle,
}: CustomScreenWrapperProps) => {
  return (
    <SafeAreaView style={[styles.container, extraStyle]}>
      {children}
    </SafeAreaView>
  );
};

export default CustomScreenWrapper;
