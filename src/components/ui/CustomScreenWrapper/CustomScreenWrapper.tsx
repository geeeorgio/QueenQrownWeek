import type { ReactNode } from 'react';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface CustomScreenWrapperProps {
  children: ReactNode;
}

const CustomScreenWrapper = ({ children }: CustomScreenWrapperProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default CustomScreenWrapper;
