import React from 'react';
import { Modal, Pressable, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

interface CustomModalProps {
  visible: boolean;
  title: string;
  description?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText: string;
  cancelText: string;
}

const CustomModal = ({
  visible,
  title,
  description,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}: CustomModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent={true}
      navigationBarTranslucent={true}
      onRequestClose={onCancel}
    >
      <CustomButton extraStyle={styles.overlay} onPress={onCancel}>
        <Pressable style={styles.content} onPress={(e) => e.stopPropagation()}>
          <View style={styles.textContainer}>
            <CustomText extraStyle={styles.title}>{title}</CustomText>

            {description && (
              <CustomText extraStyle={styles.description}>
                {description}
              </CustomText>
            )}
          </View>

          <View style={styles.buttons}>
            <CustomButton onPress={onCancel} extraStyle={styles.cancelButton}>
              <CustomText extraStyle={styles.cancelButtonText}>
                {cancelText}
              </CustomText>
            </CustomButton>

            <CustomButton onPress={onConfirm} extraStyle={styles.confirmButton}>
              <CustomText extraStyle={styles.confirmButtonText}>
                {confirmText}
              </CustomText>
            </CustomButton>
          </View>
        </Pressable>
      </CustomButton>
    </Modal>
  );
};

export default CustomModal;
