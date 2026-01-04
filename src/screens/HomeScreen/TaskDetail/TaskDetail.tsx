import React, { useMemo, useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
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
  CustomText,
  ImgIcon,
} from 'src/components';
import { BTN_FRAME, COLORS, QUEEN } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type { TaskType } from 'src/types';
import { hp, wp } from 'src/utils';

type TaskDetailProps = {
  task: TaskType;
  onClose: () => void;
};

const TaskDetail = ({ task, onClose }: TaskDetailProps) => {
  const { completeTask, tasksContextHistory } = useGameContext();
  const [note, setNote] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isCompleting, setIsCompleting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const taskNumber =
    tasksContextHistory.findIndex((t) => t.id === task.id) + 1 || 1;

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
      const fileName = `task_${task.id}_${Date.now()}.jpg`;
      const destPath = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${fileName}`;

      try {
        await ReactNativeBlobUtil.fs.cp(sourceUri, destPath);
        setImageUri(`file://${destPath}`);
      } catch (error) {
        console.error('Save task image error:', error);
      }
    }
  };

  const isFormValid = useMemo(() => {
    return imageUri !== null && note.trim().length >= 3;
  }, [imageUri, note]);

  const handleComplete = async () => {
    if (!isFormValid || !imageUri) {
      setShowModal(true);
      return;
    }

    if (isFormValid && imageUri) {
      setShowModal(false);
      setIsCompleting(true);
      try {
        await completeTask(task.id, imageUri, note.trim());
        onClose();
      } catch (error) {
        console.error('Error completing task:', error);
      } finally {
        setIsCompleting(false);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <Modal
      visible={true}
      transparent={false}
      animationType="slide"
      statusBarTranslucent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <CustomContainer extraStyle={styles.scrollContent}>
          <View style={styles.header}>
            <CustomContainer
              variant="yellow"
              extraStyle={styles.taskNumberContainer}
            >
              <View style={styles.taskNumberContent}>
                <CustomText extraStyle={styles.taskNumberText}>
                  {taskNumber || 1}
                </CustomText>
              </View>
            </CustomContainer>
            <CustomText extraStyle={styles.headerText}>
              Task {taskNumber || 1}
            </CustomText>
          </View>

          <CustomContainer
            variant="yellow"
            extraStyle={styles.taskDescriptionCard}
          >
            <View style={styles.taskDescriptionContent}>
              <View style={styles.queenImageContainer}>
                <Image
                  source={QUEEN}
                  style={styles.queenImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.taskDescriptionTextContainer}>
                <CustomText extraStyle={styles.taskDescriptionText}>
                  {task.description}
                </CustomText>
              </View>
            </View>
          </CustomContainer>

          <View style={styles.aboutTaskSection}>
            <CustomContainer extraStyle={styles.aboutTaskInputContainer}>
              <CustomInput
                placeholder="About task"
                value={note}
                onChangeCommitted={setNote}
                multiline={true}
                extraStyle={styles.aboutTaskInput}
              />
            </CustomContainer>
          </View>

          <View style={styles.photoSection}>
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
        </CustomContainer>
        <CustomButton
          onPress={handleComplete}
          extraStyle={styles.completeButton}
        >
          <ImageBackground
            source={BTN_FRAME}
            resizeMode="contain"
            style={styles.completeButtonImage}
          >
            <CustomText extraStyle={styles.completeButtonText}>
              {isCompleting ? 'Completing...' : 'Complete'}
            </CustomText>
          </ImageBackground>
        </CustomButton>
      </View>

      {showModal && (
        <CustomModal
          visible={showModal}
          title="You are almost there"
          description="At least 3 characters to describe the task and a picture to complete"
          onConfirm={() => setShowModal(false)}
          onCancel={handleCloseModal}
          confirmText="I'll do it now!"
          cancelText="Maybe later"
        />
      )}
    </Modal>
  );
};

export default TaskDetail;
