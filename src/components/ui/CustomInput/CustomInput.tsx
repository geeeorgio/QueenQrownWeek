import React, { useEffect, useState } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { TextInput } from 'react-native';

import { styles } from './styles';

import { COLORS } from 'src/constants';

interface CustomInputProps {
  placeholder: string;
  value: string;
  onChangeCommitted: (text: string) => void;
  extraStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeCommitted,
  extraStyle,
  multiline = false,
}: CustomInputProps) => {
  const [local, setLocal] = useState<string>(value ?? '');

  useEffect(() => {
    setLocal(value ?? '');
  }, [value]);

  const handleCommit = () => {
    if (local.trim() !== value?.trim()) {
      onChangeCommitted(local.trim());
    }
  };

  return (
    <TextInput
      style={[styles.container, extraStyle, multiline && styles.multiline]}
      placeholder={placeholder}
      placeholderTextColor={COLORS.placeholderTextColor}
      value={local}
      onChangeText={setLocal}
      onBlur={handleCommit}
      onSubmitEditing={handleCommit}
      submitBehavior={multiline ? 'newline' : 'blurAndSubmit'}
      returnKeyType={multiline ? 'default' : 'done'}
      multiline={multiline}
      maxLength={multiline ? 500 : 40}
    />
  );
};

export default CustomInput;
