import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  Keyboard,
  Pressable,
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
import { BTN_FRAME, COLORS, PATH_TO_SAVED_IMAGES } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import { clearAppDirectory, hp, saveImageToApp, wp } from 'src/utils';

const ProfileScreen = () => {
  const {
    userContextData,
    resetGameData,
    setUserData,
    setIsContextRegistrationCompleted,
  } = useGameContext();

  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isSaveModalVisible, setIsSaveModalVisible] = useState(false);

  const isProfileActive = !!userContextData.name;

  const isFormValid = useMemo(() => {
    return (
      name.trim().length > 0 && note.trim().length > 10 && imageUri !== null
    );
  }, [name, note, imageUri]);

  const handlePickImage = async () => {
    if (isProfileActive) return;

    const result = await launchCamera({ mediaType: 'photo', quality: 0.5 });

    if (result.didCancel || !result.assets?.[0].uri) return;

    const fileName = `user_avatar_${Date.now()}.jpg`;
    const savedPath = await saveImageToApp(result.assets[0].uri, fileName);

    if (savedPath) {
      setImageUri(savedPath);
    }
  };

  const handleConfirmDelete = async () => {
    await clearAppDirectory();
    await resetGameData();

    setName('');
    setNote('');
    setImageUri(null);
    setIsDeleteModalVisible(false);
  };

  const handleSave = async () => {
    if (isFormValid) {
      await setUserData({ name, note, photo: imageUri });

      await setIsContextRegistrationCompleted(true);

      setIsSaveModalVisible(false);
    } else {
      setIsSaveModalVisible(true);
    }
  };

  const handleAction = () => {
    if (isProfileActive) {
      setIsDeleteModalVisible(true);
    } else {
      handleSave();
    }
  };

  useFocusEffect(
    useCallback(() => {
      return async () => {
        if (!userContextData.name) {
          await setIsContextRegistrationCompleted(false);
        }
      };
    }, [setIsContextRegistrationCompleted, userContextData.name]),
  );

  //
  useEffect(() => {
    const checkDir = async () => {
      const dir = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${PATH_TO_SAVED_IMAGES}`;
      console.log('dir', dir);

      try {
        const exists = await ReactNativeBlobUtil.fs.exists(dir);
        console.log('exists dir', exists);

        if (!exists) {
          console.log('Folder does not exist.');
          return;
        }

        const files = await ReactNativeBlobUtil.fs.ls(dir);

        console.log('What is inside dir:', files);

        return files;
      } catch (e) {
        console.log('Something went wrong:', e);
      }
    };
    checkDir();
  }, [userContextData]);
  //

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <CustomScreenWrapper extraStyle={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          <View style={styles.registrationHeader}>
            <CustomText extraStyle={styles.registrationHeaderText}>
              Profile
            </CustomText>
          </View>

          <View style={styles.registrationForm}>
            <CustomContainer extraStyle={styles.inputContainer}>
              <CustomInput
                extraStyle={styles.input}
                placeholder="User"
                value={isProfileActive ? userContextData.name : name}
                onChangeCommitted={setName}
                editable={!isProfileActive}
              />
            </CustomContainer>

            <CustomContainer extraStyle={styles.inputContainer}>
              <CustomInput
                extraStyle={styles.input}
                placeholder="About yourself"
                value={isProfileActive ? userContextData.note : note}
                multiline={true}
                onChangeCommitted={setNote}
                editable={!isProfileActive}
              />
            </CustomContainer>

            <TouchableOpacity
              onPress={handlePickImage}
              activeOpacity={isProfileActive ? 1 : 0.8}
            >
              <CustomContainer extraStyle={styles.addPhotoContainer}>
                {userContextData.photo || imageUri ? (
                  <Image
                    source={{ uri: userContextData.photo || imageUri! }}
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

        <CustomButton onPress={handleAction} extraStyle={styles.saveButton}>
          <ImageBackground
            source={BTN_FRAME}
            resizeMode="contain"
            style={styles.buttonImage}
          >
            <CustomText extraStyle={styles.buttonText}>
              {isProfileActive ? 'Delete data' : 'Save'}
            </CustomText>
          </ImageBackground>
        </CustomButton>

        <CustomModal
          visible={isDeleteModalVisible}
          title="Are you sure you want to delete your data?"
          description="This action cannot be undone"
          onConfirm={() => setIsDeleteModalVisible(false)}
          onCancel={handleConfirmDelete}
          confirmText="Cancel"
          cancelText="Delete"
        />

        <CustomModal
          visible={isSaveModalVisible}
          title="Please fill all the fields ✎"
          description="At least 10 characters about yourself and a photo are required"
          onConfirm={() => setIsSaveModalVisible(false)}
          onCancel={() => setIsSaveModalVisible(false)}
          confirmText="Back"
          cancelText="Cancel"
        />
      </CustomScreenWrapper>
    </Pressable>
  );
};

export default ProfileScreen;
