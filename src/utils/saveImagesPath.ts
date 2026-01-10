import { PermissionsAndroid, Platform } from 'react-native';

export const saveImageToApp = async (
  sourceUri: string,
  _fileName: string,
): Promise<string | null> => {
  try {
    return sourceUri.startsWith('file://') ? sourceUri : `file://${sourceUri}`;
  } catch (error) {
    console.error('Error handling image path:', error);
    return null;
  }
};

export const requestCameraPermission = async () => {
  if (Platform.OS !== 'android') return true;

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Permission to use camera',
        message: 'The app needs access to your camera so you can take a photo.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export const clearAppDirectory = async () => {
  console.log('Using system cache - no manual clearing needed');
};
