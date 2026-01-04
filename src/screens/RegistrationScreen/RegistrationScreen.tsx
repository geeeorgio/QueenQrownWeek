import React, { useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { launchCamera } from 'react-native-image-picker';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomInput,
  CustomModal,
  CustomScreenWrapper,
  CustomText,
  ImgIcon,
} from 'src/components';
import { BTN_FRAME, COLORS, LOGO } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import { hp, wp } from 'src/utils';

const RegistrationScreen = () => {
  const { setUserData, setIsContextRegistrationCompleted } = useGameContext();

  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const isFormValid = useMemo(() => {
    return (
      name.trim().length > 0 && note.trim().length > 10 && imageUri !== null
    );
  }, [name, note, imageUri]);

  const handlePickImage = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
    });

    if (result.didCancel) {
      return;
    }

    if (result.errorMessage) {
      console.error('Error picking image:', result.errorMessage);
      return;
    }

    if (result.assets && result.assets[0].uri) {
      const sourceUri = result.assets[0].uri;
      const fileName = `user_avatar_${Date.now()}.jpg`;
      const destPath = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${fileName}`;

      try {
        await ReactNativeBlobUtil.fs.cp(sourceUri, destPath);
        setImageUri(`file://${destPath}`);
      } catch (error) {
        console.error('Save image error:', error);
      }
    }
  };

  const handleSave = async () => {
    if (!isFormValid) {
      setIsModalVisible(true);
      return;
    }

    if (isFormValid) {
      await setUserData({ name, note, photo: imageUri });
      await setIsContextRegistrationCompleted(true);
    }
  };

  return (
    <CustomScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.registrationHeader}>
          <View style={styles.registrationHeaderLeft}>
            <Image
              source={LOGO}
              resizeMode="contain"
              style={styles.logoImage}
            />
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

          <TouchableOpacity onPress={handlePickImage} activeOpacity={0.8}>
            <CustomContainer extraStyle={styles.addPhotoContainer}>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  style={styles.previewImage}
                  resizeMode="cover"
                />
              ) : (
                <>
                  <ImgIcon
                    width={wp(44)}
                    height={hp(44)}
                    color={COLORS.yellowMain}
                  />
                  <CustomText extraStyle={styles.addPhotoText}>
                    Your photo
                  </CustomText>
                </>
              )}
            </CustomContainer>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <CustomButton onPress={handleSave} extraStyle={styles.saveButton}>
        <ImageBackground
          source={BTN_FRAME}
          resizeMode="contain"
          style={styles.buttonImage}
        >
          <CustomText extraStyle={styles.buttonText}>Save</CustomText>
        </ImageBackground>
      </CustomButton>

      <CustomModal
        visible={isModalVisible}
        title="Please fill all the fields ✎"
        description="At least 10 characters about yourself and a photo are required"
        onConfirm={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        confirmText="Continue"
        cancelText="Back"
      />
    </CustomScreenWrapper>
  );
};

export default RegistrationScreen;
