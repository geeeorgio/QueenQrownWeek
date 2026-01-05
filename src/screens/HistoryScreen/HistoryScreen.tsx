import React, { useMemo } from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  View,
} from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { BTN_FRAME, QUEEN } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type { TaskType } from 'src/types';
import { handleShare } from 'src/utils';

const HistoryScreen = () => {
  const { tasksContextHistory } = useGameContext();

  const completedTasks = useMemo(() => {
    return tasksContextHistory.filter(
      (task) => task.completed && task.photoUri && task.userNote,
    );
  }, [tasksContextHistory]);

  const handleShareTask = async () => {
    await handleShare();
  };

  const renderItem = ({ item, index }: { item: TaskType; index: number }) => {
    const dayNumber = (index % 4) + 1;

    return (
      <CustomContainer extraStyle={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardLeftSection}>
            <View style={styles.dayTextContainer}>
              <CustomText extraStyle={styles.dayText}>
                Day {dayNumber}
              </CustomText>
              <CustomText extraStyle={styles.descriptionText}>
                {item.description}
              </CustomText>
            </View>
            <CustomButton
              onPress={handleShareTask}
              extraStyle={styles.shareButton}
            >
              <ImageBackground
                source={BTN_FRAME}
                resizeMode="contain"
                style={styles.shareButtonImage}
              >
                <CustomText extraStyle={styles.shareButtonText}>
                  Share
                </CustomText>
              </ImageBackground>
            </CustomButton>
          </View>

          <View style={styles.cardRightSection}>
            <View style={styles.taskImageContainer}>
              {item.photoUri && (
                <Image
                  source={{ uri: item.photoUri }}
                  style={styles.taskImage}
                  resizeMode="cover"
                />
              )}
            </View>
            <ScrollView
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
              contentContainerStyle={styles.userNoteContainer}
              style={{ flex: 1 }}
            >
              <CustomText extraStyle={styles.userNote}>
                {item.userNote}
              </CustomText>
            </ScrollView>
          </View>
        </View>
      </CustomContainer>
    );
  };

  const EmptyState = () => (
    <CustomContainer variant="yellow" extraStyle={styles.emptyCard}>
      <View style={styles.emptyCardContent}>
        <View style={styles.emptyImageContainer}>
          <Image source={QUEEN} style={styles.emptyImage} resizeMode="cover" />
        </View>
        <View style={styles.emptyTextContainer}>
          <CustomText extraStyle={styles.emptyText}>
            Unfortunately, there are no completed tasks.
          </CustomText>
        </View>
      </View>
    </CustomContainer>
  );

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.header}>
        <CustomText extraStyle={styles.headerTitle}>History</CustomText>
      </View>

      <FlatList
        data={completedTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyState}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </CustomScreenWrapper>
  );
};

export default HistoryScreen;
