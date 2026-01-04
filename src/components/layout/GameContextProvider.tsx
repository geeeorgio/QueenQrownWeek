import { useEffect, useMemo, useState, type ReactNode } from 'react';

import {
  BUG_EXCHANGE,
  CROWN_EXCHANGE,
  FLOWER_EXCHANGE,
  MAIN_BG_IMAGE,
  PYRAMID_EXCHANGE,
  TASKS,
} from 'src/constants';
import { GameContext } from 'src/hooks/useGameContext';
import type {
  ArtefactIdType,
  ExchangeItemType,
  TaskType,
  userDataType,
} from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [onboardingDone, setOnboardingDone] = useState(false);
  const [regDone, setRegDone] = useState(false);
  const [canGetTask, setCanGetTask] = useState(true);
  const [taskDone, setTaskDone] = useState(false);
  const [userData, setUserDataState] = useState<userDataType>({
    name: '',
    note: '',
    photo: null,
  });
  const [artefacts, setArtefacts] = useState<{
    [key in ArtefactIdType]: number;
  }>({
    Pyramid: 0,
    Flower: 0,
    Bug: 0,
    Crown: 0,
  });
  const [tasks, setTasks] = useState<TaskType[]>(TASKS);
  const [exchange, setExchange] = useState({
    Pyramid: PYRAMID_EXCHANGE,
    Flower: FLOWER_EXCHANGE,
    Bug: BUG_EXCHANGE,
    Crown: [CROWN_EXCHANGE],
  });

  useEffect(() => {
    const init = async () => {
      const [
        savedOnboarding,
        savedReg,
        savedUser,
        savedArt,
        savedTasks,
        savedExchange,
      ] = await Promise.all([
        getItemFromStorage<boolean>('isOnboardingCompleted'),
        getItemFromStorage<boolean>('isRegistrationCompleted'),
        getItemFromStorage<userDataType>('userData'),
        getItemFromStorage<{ [key in ArtefactIdType]: number }>(
          'artefactsCount',
        ),
        getItemFromStorage<TaskType[]>('tasksHistory'),
        getItemFromStorage<{ [key in ArtefactIdType]: ExchangeItemType[] }>(
          'exchangeHistory',
        ),
      ]);

      if (savedOnboarding !== null) setOnboardingDone(savedOnboarding);
      if (savedReg !== null) setRegDone(savedReg);
      if (savedUser) setUserDataState(savedUser);
      if (savedArt) setArtefacts(savedArt);
      if (savedTasks) setTasks(savedTasks);
      if (savedExchange) setExchange(savedExchange);

      if (savedTasks) {
        const lastTask = [...savedTasks]
          .reverse()
          .find((t) => t.completed && t.completedAt);
        if (lastTask?.completedAt) {
          const hoursPassed =
            (Date.now() - new Date(lastTask.completedAt).getTime()) /
            (1000 * 60 * 60);
          const isAvailable = hoursPassed >= 24;
          setCanGetTask(isAvailable);
          setTaskDone(!isAvailable);
        }
      }
    };
    init();
  }, []);

  const setIsContextOnboardingCompleted = async (val: boolean) => {
    setOnboardingDone(val);
    await setItemInStorage('isOnboardingCompleted', val);
  };

  const setIsContextRegistrationCompleted = async (val: boolean) => {
    setRegDone(val);
    await setItemInStorage('isRegistrationCompleted', val);
  };

  const setUserData = async (val: userDataType) => {
    setUserDataState(val);
    await setItemInStorage('userData', val);
  };

  const setArtefactsContextCount = async (val: {
    [key in ArtefactIdType]: number;
  }) => {
    setArtefacts(val);
    await setItemInStorage('artefactsCount', val);
  };

  const setTasksContextHistory = async (val: TaskType[]) => {
    setTasks(val);
    await setItemInStorage('tasksHistory', val);
  };

  const setExchangeContextHistory = async (val: {
    [key in ArtefactIdType]: ExchangeItemType[];
  }) => {
    setExchange(val);
    await setItemInStorage('exchangeHistory', val);
  };

  const contextValue = useMemo(
    () => ({
      contextBackground: MAIN_BG_IMAGE,
      isContextOnboardingCompleted: onboardingDone,
      setIsContextOnboardingCompleted,
      isContextRegistrationCompleted: regDone,
      setIsContextRegistrationCompleted,
      canGetNewTask: canGetTask,
      setCanGetNewTask: setCanGetTask,
      dailyTaskDone: taskDone,
      setDailyTaskDone: setTaskDone,
      userContextData: userData,
      setUserData,
      artefactsContextCount: artefacts,
      setArtefactsContextCount,
      tasksContextHistory: tasks,
      setTasksContextHistory,
      exchangeContextHistory: exchange,
      setExchangeContextHistory,
    }),
    [
      onboardingDone,
      regDone,
      canGetTask,
      taskDone,
      userData,
      artefacts,
      tasks,
      exchange,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
