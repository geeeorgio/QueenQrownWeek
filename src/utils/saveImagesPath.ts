import ReactNativeBlobUtil from 'react-native-blob-util';

import { PATH_TO_SAVED_IMAGES } from 'src/constants';

const getAppDir = () =>
  `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/${PATH_TO_SAVED_IMAGES}`;

export const getAppPath = async (fileName: string) => {
  const appDir = getAppDir();
  const isDir = await ReactNativeBlobUtil.fs.isDir(appDir);
  if (!isDir) {
    await ReactNativeBlobUtil.fs.mkdir(appDir);
  }
  return `${appDir}/${fileName}`;
};

export const saveImageToApp = async (
  sourceUri: string,
  fileName: string,
): Promise<string | null> => {
  try {
    const destPath = await getAppPath(fileName);
    await ReactNativeBlobUtil.fs.cp(sourceUri, destPath);
    return `file://${destPath}`;
  } catch (error) {
    console.error('Error saving image to app storage:', error);
    return null;
  }
};

export const clearAppDirectory = async () => {
  const appDir = getAppDir();

  try {
    const exists = await ReactNativeBlobUtil.fs.exists(appDir);
    if (exists) {
      const files = await ReactNativeBlobUtil.fs.ls(appDir);

      console.log(`files in app directory ${appDir}:`, files);

      await ReactNativeBlobUtil.fs.unlink(appDir);
      console.log('App directory cleared');
    }
  } catch (error) {
    console.error('Error clearing app directory:', error);
  }
};
