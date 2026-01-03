import AsyncStorage from '@react-native-async-storage/async-storage';

import type { StorageKey } from 'src/constants';

export const getItemFromStorage = async <T>(
  key: StorageKey,
): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    console.error('Error getting item from storage:', e);
    return null;
  }
};

export const setItemInStorage = async <T>(
  key: StorageKey,
  value: T,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error setting item in storage:', e);
  }
};
