import React, { useMemo } from 'react';
import { Image, View } from 'react-native';

import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { ARTEFACTS } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';

const ArtefactsDisplay = () => {
  const { artefactsContextCount } = useGameContext();

  const displayedArtefacts = useMemo(() => {
    return ARTEFACTS.filter((art) => art.id !== 'Crown').map((art) => ({
      ...art,
      count: artefactsContextCount[art.id],
    }));
  }, [artefactsContextCount]);

  return (
    <CustomContainer extraStyle={styles.artefactsSection}>
      <CustomText extraStyle={styles.artefactsLabel}>Artifacts:</CustomText>
      <View style={styles.artefactsList}>
        {displayedArtefacts.map((artefact) => (
          <View key={artefact.id} style={styles.artefactItem}>
            <Image
              source={artefact.image}
              style={styles.artefactImage}
              resizeMode="contain"
            />
            <CustomText extraStyle={styles.artefactCount}>
              {artefact.count}
            </CustomText>
          </View>
        ))}
      </View>
    </CustomContainer>
  );
};

export default ArtefactsDisplay;
