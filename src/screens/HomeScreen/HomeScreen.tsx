import React, { useMemo, useState } from 'react';
import { Image, ImageBackground, ScrollView, View } from 'react-native';

import GameInfo from './GameInfo/GameInfo';
import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  InfoIcon,
} from 'src/components';
import { ARTEFACTS, BTN_FRAME, COLORS, QUEEN } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import { wp } from 'src/utils';

const HomeScreen = () => {
  const {
    userContextData,
    artefactsContextCount,
    tasksContextHistory,
    canGetNewTask,
  } = useGameContext();

  const [isGameInfoVisible, setIsGameInfoVisible] = useState(false);

  const currentDay = useMemo(() => {
    const completedTasks = tasksContextHistory.filter((t) => t.completed);
    return Math.min(completedTasks.length + 1, 4);
  }, [tasksContextHistory]);

  const handleStartDay = () => {
    console.log('Start day pressed');
  };

  const handleInfoPress = () => {
    setIsGameInfoVisible(true);
  };

  const handleCloseGameInfo = () => {
    setIsGameInfoVisible(false);
  };

  const displayedArtefacts = useMemo(() => {
    return ARTEFACTS.filter((art) => art.id !== 'Crown').map((art) => ({
      ...art,
      count: artefactsContextCount[art.id],
    }));
  }, [artefactsContextCount]);

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      {isGameInfoVisible ? (
        <GameInfo onClose={handleCloseGameInfo} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              {userContextData.photo ? (
                <Image
                  source={{ uri: userContextData.photo }}
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              ) : (
                <View style={styles.profileImagePlaceholder} />
              )}
            </View>
            <View style={styles.profileTextContainer}>
              <CustomText extraStyle={styles.greetingText}>
                Hello, {userContextData.name || 'User'}
              </CustomText>
              <CustomText extraStyle={styles.complimentText}>
                You beautiful
              </CustomText>
            </View>
            <CustomButton
              onPress={handleInfoPress}
              extraStyle={styles.infoButton}
            >
              <InfoIcon
                width={wp(24)}
                height={wp(24)}
                color={COLORS.yellowMain}
              />
            </CustomButton>
          </View>

          <CustomContainer extraStyle={styles.artefactsSection}>
            <CustomText extraStyle={styles.artefactsLabel}>
              Artifacts:
            </CustomText>
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

          <CustomContainer extraStyle={styles.daySection}>
            <CustomText extraStyle={styles.dayLabel}>
              Day {currentDay}
            </CustomText>
            <View style={styles.dayButtons}>
              {[1, 2, 3, 4].map((day) => (
                <CustomButton
                  key={day}
                  onPress={() => {}}
                  extraStyle={[
                    styles.dayButton,
                    day === currentDay && styles.dayButtonActive,
                  ]}
                >
                  <View style={styles.dayTextContainer}>
                    <CustomText extraStyle={styles.dayButtonText}>
                      {day}
                    </CustomText>
                  </View>
                </CustomButton>
              ))}
            </View>

            <CustomContainer variant="yellow" extraStyle={styles.taskCard}>
              <View style={styles.taskCardContent}>
                <View style={styles.queenImageContainer}>
                  <Image
                    source={QUEEN}
                    style={styles.queenImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.taskCardTextContainer}>
                  <CustomText extraStyle={styles.taskCardText}>
                    Start the task and become the most beautiful
                  </CustomText>
                  <CustomButton
                    onPress={handleStartDay}
                    extraStyle={styles.startDayButton}
                    disabled={!canGetNewTask}
                  >
                    <ImageBackground
                      source={BTN_FRAME}
                      resizeMode="contain"
                      style={styles.startDayButtonImage}
                    >
                      <CustomText extraStyle={styles.startDayButtonText}>
                        Start day
                      </CustomText>
                    </ImageBackground>
                  </CustomButton>
                </View>
              </View>
            </CustomContainer>
          </CustomContainer>
        </ScrollView>
      )}
    </CustomScreenWrapper>
  );
};

export default HomeScreen;
