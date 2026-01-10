import React from 'react';
import { View } from 'react-native';

import ExchangeList from './ExchangeList/ExchangeList';
import { styles } from './styles';

import {
  ArtefactsDisplay,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';

const ExchangeScreen = () => {
  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <CustomText extraStyle={styles.title}>Exchanger</CustomText>

      <View style={styles.content}>
        <ArtefactsDisplay />
        <ExchangeList />
      </View>
    </CustomScreenWrapper>
  );
};

export default ExchangeScreen;
