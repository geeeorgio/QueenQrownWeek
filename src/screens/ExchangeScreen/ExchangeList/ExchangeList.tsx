import React, { useState } from 'react';
import { FlatList, Image, ImageBackground, View } from 'react-native';

import SuccessModal from '../SuccessModal/SuccessModal';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ARTEFACTS, BTN_FRAME, CATEGORY_DESCRIPTIONS } from 'src/constants';
import { useGameContext } from 'src/hooks/useGameContext';
import type { ArtefactIdType, ArtefactType } from 'src/types';

const ExchangeList = () => {
  const { artefactsContextCount, exchangeContextHistory, handleExchange } =
    useGameContext();

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [selectedArtefactType, setSelectedArtefactType] =
    useState<ArtefactIdType | null>(null);
  const [selectedExchangeItem, setSelectedExchangeItem] = useState<any>(null);

  const onExchangePress = async (
    type: ArtefactIdType,
    isAlreadyOpened: boolean,
  ) => {
    if (isAlreadyOpened) {
      const history = exchangeContextHistory[type];
      const item = history.find((h) => h.completed) || history[0];

      setSelectedArtefactType(type);
      setSelectedExchangeItem(item);
      setSuccessModalVisible(true);
      return;
    }

    const result = await handleExchange(type);
    if (result) {
      setSelectedArtefactType(type);
      setSelectedExchangeItem(result);
      setSuccessModalVisible(true);
    }
  };

  const renderItem = ({ item }: { item: ArtefactType }) => {
    const isCrown = item.id === 'Crown';
    const history = exchangeContextHistory[item.id];

    const completedCount = history.filter((h) => h.completed).length;
    const totalCount = history.length;
    const allOpened = completedCount === totalCount;

    const hasEnoughResources = isCrown
      ? artefactsContextCount.Flower >= 3 && artefactsContextCount.Bug >= 3
      : artefactsContextCount[item.id] >= 1;

    const canClickToView = allOpened;
    const isButtonEnabled = hasEnoughResources || canClickToView;

    return (
      <CustomContainer
        variant={isCrown ? 'yellow' : 'brown'}
        extraStyle={styles.itemContainer}
      >
        <View style={styles.itemContent}>
          <View style={styles.itemHeader}>
            <CustomText extraStyle={styles.itemTitle}>
              Exchange for {item.id.toLowerCase()}
            </CustomText>
            <CustomText extraStyle={styles.itemDescription}>
              {CATEGORY_DESCRIPTIONS[item.id]}
            </CustomText>
          </View>

          {isCrown && (
            <View style={styles.crownImageContainer}>
              <Image
                source={item.image}
                style={styles.crownImage}
                resizeMode="contain"
              />
            </View>
          )}

          <View style={styles.actionRow}>
            <CustomButton
              onPress={() => onExchangePress(item.id, allOpened)}
              disabled={!isButtonEnabled}
              extraStyle={[
                styles.exchangeButton,
                !isButtonEnabled && styles.disabledButton,
                allOpened && { opacity: 1 },
              ]}
            >
              <ImageBackground
                source={BTN_FRAME}
                resizeMode="contain"
                style={styles.exchangeButtonImage}
              >
                <CustomText extraStyle={styles.exchangeButtonText}>
                  {allOpened ? 'View Story' : 'Exchange'}
                </CustomText>
              </ImageBackground>
            </CustomButton>

            <View style={styles.priceContainer}>
              {!allOpened &&
                (isCrown ? (
                  <>
                    <CustomText extraStyle={styles.priceText}>3</CustomText>
                    <Image
                      source={ARTEFACTS.find((a) => a.id === 'Flower')?.image}
                      style={styles.priceIcon}
                      resizeMode="contain"
                    />
                    <CustomText extraStyle={styles.priceText}>3</CustomText>
                    <Image
                      source={ARTEFACTS.find((a) => a.id === 'Bug')?.image}
                      style={styles.priceIcon}
                      resizeMode="contain"
                    />
                  </>
                ) : (
                  <>
                    <CustomText extraStyle={styles.priceText}>1</CustomText>
                    <Image
                      source={item.image}
                      style={styles.priceIcon}
                      resizeMode="contain"
                    />
                  </>
                ))}
            </View>
          </View>
        </View>
      </CustomContainer>
    );
  };

  return (
    <>
      <FlatList
        keyExtractor={(item) => item.id}
        data={ARTEFACTS}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        ListFooterComponent={() => <View style={styles.listFooter} />}
      />

      <SuccessModal
        visible={successModalVisible}
        artefactType={selectedArtefactType || 'Pyramid'}
        exchangeItem={selectedExchangeItem}
        onClose={() => {
          setSuccessModalVisible(false);
          setSelectedArtefactType(null);
          setSelectedExchangeItem(null);
        }}
      />
    </>
  );
};

export default ExchangeList;
