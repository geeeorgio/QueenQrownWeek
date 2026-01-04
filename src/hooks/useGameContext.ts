import { createContext, useContext } from 'react';

import {
  BUG_EXCHANGE,
  CROWN_EXCHANGE,
  FLOWER_EXCHANGE,
  MAIN_BG_IMAGE,
  PYRAMID_EXCHANGE,
} from 'src/constants';
import type { GameContextType } from 'src/types';

export const GameContext = createContext<GameContextType>({
  contextBackground: MAIN_BG_IMAGE,
  //
  isContextOnboardingCompleted: false,
  setIsContextOnboardingCompleted: async () => {
    console.warn('GameContext not initialized');
  },
  //
  isContextRegistrationCompleted: false,
  setIsContextRegistrationCompleted: async () => {
    console.warn('GameContext not initialized');
  },
  //
  canGetNewTask: false,
  setCanGetNewTask: async () => {
    console.warn('GameContext not initialized');
  },
  //
  dailyTaskDone: false,
  setDailyTaskDone: async () => {
    console.warn('GameContext not initialized');
  },
  //
  userContextData: {
    name: '',
    note: '',
    photo: null,
  },
  setUserData: async () => {
    console.warn('GameContext not initialized');
  },
  //
  artefactsContextCount: {
    Pyramid: 0,
    Flower: 0,
    Bug: 0,
    Crown: 0,
  },
  setArtefactsContextCount: async () => {
    console.warn('GameContext not initialized');
  },
  //
  tasksContextHistory: [],
  setTasksContextHistory: async () => {
    console.warn('GameContext not initialized');
  },
  //
  exchangeContextHistory: {
    Pyramid: PYRAMID_EXCHANGE,
    Flower: FLOWER_EXCHANGE,
    Bug: BUG_EXCHANGE,
    Crown: [CROWN_EXCHANGE],
  },
  setExchangeContextHistory: async () => {
    console.warn('GameContext not initialized');
  },
});

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context)
    throw new Error('useGameContext must be used within GameContextProvider');
  return context;
};
