import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { useGameContext } from 'src/hooks/useGameContext';

interface GameBackgroundProps {
  children: ReactNode;
}

const GameBackground = ({ children }: GameBackgroundProps) => {
  const { contextBackground } = useGameContext();

  return (
    <ImageBackground
      source={contextBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
  },
});
