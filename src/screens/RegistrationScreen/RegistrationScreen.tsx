import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomInput,
  CustomScreenWrapper,
  CustomText,
  ImgIcon,
} from 'src/components';
import { COLORS, LOGO } from 'src/constants';
import { hp, wp } from 'src/utils';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.registrationHeader}>
        <View style={styles.registrationHeaderLeft}>
          <Image source={LOGO} resizeMode="contain" style={styles.logoImage} />
        </View>
        <View style={styles.registrationHeaderRight}>
          <CustomText extraStyle={styles.registrationHeaderText}>
            Registration
          </CustomText>
        </View>
      </View>

      <View style={styles.registrationForm}>
        <CustomContainer extraStyle={styles.inputContainer}>
          <CustomInput
            extraStyle={styles.input}
            placeholder="Your name"
            value={name}
            onChangeCommitted={setName}
          />
        </CustomContainer>
        <CustomContainer extraStyle={styles.inputContainer}>
          <CustomInput
            extraStyle={styles.input}
            placeholder="About yourself"
            value={note}
            multiline={true}
            onChangeCommitted={setNote}
          />
        </CustomContainer>
        <CustomContainer extraStyle={styles.addPhotoContainer}>
          <ImgIcon width={wp(44)} height={hp(44)} color={COLORS.yellowMain} />
          <CustomText extraStyle={styles.addPhotoText}>Your photo</CustomText>
        </CustomContainer>
      </View>
    </CustomScreenWrapper>
  );
};

export default RegistrationScreen;
