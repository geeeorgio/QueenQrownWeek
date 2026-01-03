import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { Text } from 'react-native';

import { styles } from './styles';

interface CustomTextProps {
  children: ReactNode;
  extraStyle?: StyleProp<TextStyle>;
}

const CustomText = ({ children, extraStyle }: CustomTextProps) => {
  return <Text style={[styles.default, extraStyle]}>{children}</Text>;
};

export default CustomText;
