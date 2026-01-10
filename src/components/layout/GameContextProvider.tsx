import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

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

  const [exchange, setExchange] = useState<{
    [key in ArtefactIdType]: ExchangeItemType[];
  }>({
    Pyramid: PYRAMID_EXCHANGE,
    Flower: FLOWER_EXCHANGE,
    Bug: BUG_EXCHANGE,
    Crown: [CROWN_EXCHANGE],
  });

  useEffect(() => {
    const init = async () => {
      try {
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
          const lastTask = [...savedTasks].reverse().find((t) => t.completedAt);
          if (lastTask?.completedAt) {
            const hoursPassed =
              (Date.now() - new Date(lastTask.completedAt).getTime()) /
              (1000 * 60 * 60);
            setCanGetTask(hoursPassed >= 24);
          }
        }
      } catch (e) {
        console.error('Context init error:', e);
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

  const completeTask = useCallback(
    async (taskId: string, photoUri: string, userNote: string) => {
      const now = new Date().toISOString();

      try {
        const updatedTasks = tasks.map((t) =>
          t.id === taskId
            ? { ...t, completed: true, photoUri, userNote, completedAt: now }
            : t,
        );

        const types: ArtefactIdType[] = ['Pyramid', 'Flower', 'Bug'];
        const randomType = types[Math.floor(Math.random() * types.length)];

        const updatedArtefacts = {
          ...artefacts,
          [randomType]: artefacts[randomType] + 1,
        };

        await Promise.all([
          setItemInStorage('tasksHistory', updatedTasks),
          setItemInStorage('artefactsCount', updatedArtefacts),
        ]);

        setTasks(updatedTasks);
        setArtefacts(updatedArtefacts);
        setCanGetTask(false);
      } catch (error) {
        console.error('Failed to complete task:', error);
      }
    },
    [tasks, artefacts],
  );

  const resetGameData = useCallback(async () => {
    const emptyUser: userDataType = { name: '', note: '', photo: null };
    const emptyArtefacts = { Pyramid: 0, Flower: 0, Bug: 0, Crown: 0 };

    const emptyExchange = {
      Pyramid: PYRAMID_EXCHANGE,
      Flower: FLOWER_EXCHANGE,
      Bug: BUG_EXCHANGE,
      Crown: [CROWN_EXCHANGE],
    };
    const initialTasks = TASKS;

    setUserDataState(emptyUser);
    setArtefacts(emptyArtefacts);
    setTasks(initialTasks);
    setCanGetTask(true);
    setExchange(emptyExchange);

    try {
      await Promise.all([
        setItemInStorage('userData', emptyUser),
        setItemInStorage('artefactsCount', emptyArtefacts),
        setItemInStorage('tasksHistory', initialTasks),
        setItemInStorage('exchangeHistory', emptyExchange),
      ]);
    } catch (error) {
      console.error('Failed to reset game data:', error);
    }
  }, []);

  const handleExchange = useCallback(
    async (type: ArtefactIdType): Promise<ExchangeItemType | null> => {
      const isCrown = type === 'Crown';

      if (isCrown) {
        if (artefacts.Flower < 3 || artefacts.Bug < 3) return null;
      } else {
        if (artefacts[type] < 1) return null;
      }

      const currentList = exchange[type];

      const incompleteItems = currentList.filter((item) => !item.completed);

      if (incompleteItems.length === 0) return null;

      const randomIndex = Math.floor(Math.random() * incompleteItems.length);
      const selectedItem = incompleteItems[randomIndex];

      const updatedArtefacts = { ...artefacts };
      if (isCrown) {
        updatedArtefacts.Flower -= 3;
        updatedArtefacts.Bug -= 3;
        updatedArtefacts.Crown += 1;
      } else {
        updatedArtefacts[type] -= 1;
      }

      const updatedExchange = {
        ...exchange,
        [type]: currentList.map((item) =>
          item.id === selectedItem.id ? { ...item, completed: true } : item,
        ),
      };

      try {
        await Promise.all([
          setItemInStorage('artefactsCount', updatedArtefacts),
          setItemInStorage('exchangeHistory', updatedExchange),
        ]);
        setArtefacts(updatedArtefacts);
        setExchange(updatedExchange);

        return selectedItem;
      } catch (e) {
        console.error('Failed to exchange:', e);
        return null;
      }
    },
    [artefacts, exchange],
  );

  const contextValue = useMemo(
    () => ({
      contextBackground: MAIN_BG_IMAGE,
      isContextOnboardingCompleted: onboardingDone,
      setIsContextOnboardingCompleted,
      isContextRegistrationCompleted: regDone,
      setIsContextRegistrationCompleted,
      canGetNewTask: canGetTask,
      setCanGetNewTask: setCanGetTask,
      userContextData: userData,
      setUserData,
      artefactsContextCount: artefacts,
      setArtefactsContextCount,
      tasksContextHistory: tasks,
      setTasksContextHistory,
      exchangeContextHistory: exchange,
      setExchangeContextHistory,
      completeTask,
      resetGameData,
      handleExchange,
    }),
    [
      onboardingDone,
      regDone,
      canGetTask,
      userData,
      artefacts,
      tasks,
      exchange,
      completeTask,
      resetGameData,
      handleExchange,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
