import React, { useEffect, useMemo, useState } from 'react';
import { Image, ImageBackground, ScrollView, View } from 'react-native';

import GameInfo from './GameInfo/GameInfo';
import { styles } from './styles';
import TaskDetail from './TaskDetail/TaskDetail';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
  InfoIcon,
} from 'src/components';
import { ARTEFACTS, BTN_FRAME, COLORS, QUEEN } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import { formatTimeRemaining, wp } from 'src/utils';

const HomeScreen = () => {
  const {
    userContextData,
    artefactsContextCount,
    tasksContextHistory,
    canGetNewTask,
    setCanGetNewTask,
  } = useGameContext();

  const [isGameInfoVisible, setIsGameInfoVisible] = useState(false);
  const [isTaskDetailVisible, setIsTaskDetailVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const currentTask = useMemo(() => {
    return (
      tasksContextHistory.find((t) => !t.completed) ||
      tasksContextHistory[0] ||
      null
    );
  }, [tasksContextHistory]);

  const completedCount = useMemo(
    () => tasksContextHistory.filter((t) => t.completed).length,
    [tasksContextHistory],
  );

  const currentDay = useMemo(() => {
    if (!canGetNewTask && completedCount > 0) {
      return ((completedCount - 1) % 4) + 1;
    }
    return (completedCount % 4) + 1;
  }, [completedCount, canGetNewTask]);

  const getDayStatus = (dayNumber: number) => {
    const isDone =
      dayNumber < currentDay || (dayNumber === currentDay && !canGetNewTask);
    const isCurrent = dayNumber === currentDay && canGetNewTask;
    return { isDone, isCurrent };
  };

  useEffect(() => {
    if (!canGetNewTask) {
      const lastTask = [...tasksContextHistory]
        .reverse()
        .find((t) => t.completedAt);

      if (lastTask?.completedAt) {
        const update = () => {
          const diff = Date.now() - new Date(lastTask.completedAt!).getTime();
          const remain = 24 * 60 * 60 * 1000 - diff;

          if (remain <= 0) {
            setTimeRemaining(0);
            setCanGetNewTask(true);
          } else {
            setTimeRemaining(remain);
          }
        };

        update();
        const int = setInterval(update, 1000);
        return () => clearInterval(int);
      }
    }

    setTimeRemaining(null);
    return;
  }, [canGetNewTask, tasksContextHistory, setCanGetNewTask]);

  const handleStartDay = () => {
    if (currentTask && canGetNewTask) {
      setIsTaskDetailVisible(true);
    } else {
      console.warn(
        'Cannot start task:',
        !currentTask ? 'No available task' : 'Task not available yet',
        'canGetNewTask:',
        canGetNewTask,
      );
    }
  };

  const handleCloseTaskDetail = () => {
    setIsTaskDetailVisible(false);
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
      ) : isTaskDetailVisible && currentTask ? (
        <TaskDetail task={currentTask} onClose={handleCloseTaskDetail} />
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
              {[1, 2, 3, 4].map((day) => {
                const { isDone, isCurrent } = getDayStatus(day);

                return (
                  <CustomContainer
                    key={day}
                    extraStyle={[
                      styles.dayButton,
                      isDone && styles.dayButtonDone,
                      isCurrent && styles.dayButtonActive,
                    ]}
                  >
                    <View
                      style={[
                        styles.dayTextContainer,
                        isDone && styles.dayTextContainerDone,
                      ]}
                    >
                      <CustomText extraStyle={styles.dayButtonText}>
                        {day}
                      </CustomText>
                    </View>
                  </CustomContainer>
                );
              })}
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
                    {canGetNewTask
                      ? 'Start the task and become the most beautiful'
                      : "That's all for today. See you tomorrow!"}
                  </CustomText>
                  {canGetNewTask && currentTask ? (
                    <CustomButton
                      onPress={handleStartDay}
                      extraStyle={styles.startDayButton}
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
                  ) : timeRemaining !== null && timeRemaining > 0 ? (
                    <View style={styles.cooldownContainer}>
                      <CustomText extraStyle={styles.cooldownText}>
                        {formatTimeRemaining(timeRemaining)}
                      </CustomText>
                    </View>
                  ) : null}
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
