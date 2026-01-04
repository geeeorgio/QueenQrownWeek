import type { ImageSourcePropType } from 'react-native';

export const artefactsIds = ['Pyramid', 'Flower', 'Bug', 'Crown'] as const;

export type ArtefactIdType = (typeof artefactsIds)[number];

export type ArtefactType = {
  id: ArtefactIdType;
  image: ImageSourcePropType;
};

export type TaskType = {
  id: string;
  description: string;
  completed: boolean;
  userNote: string;
  photoUri: string | null;
  completedAt: string | null;
};

export type ExchangeItemType = {
  id: string;
  description: string;
  completed: boolean;
};

export type userDataType = {
  name: string;
  note: string;
  photo?: string | null;
};

export type GameContextType = {
  contextBackground: ImageSourcePropType;
  //
  isContextOnboardingCompleted: boolean;
  setIsContextOnboardingCompleted: (value: boolean) => void;
  //
  isContextRegistrationCompleted: boolean;
  setIsContextRegistrationCompleted: (value: boolean) => void;
  //
  canGetNewTask: boolean;
  setCanGetNewTask: (value: boolean) => void;
  //
  userContextData: userDataType;
  setUserData: (value: userDataType) => void;
  //
  artefactsContextCount: { [key in ArtefactIdType]: number };
  setArtefactsContextCount: (value: {
    [key in ArtefactIdType]: number;
  }) => void;
  //
  tasksContextHistory: TaskType[];
  setTasksContextHistory: (value: TaskType[]) => void;
  //
  exchangeContextHistory: {
    [key in ArtefactIdType]: ExchangeItemType[];
  };
  setExchangeContextHistory: (value: {
    [key in ArtefactIdType]: ExchangeItemType[];
  }) => void;
  //
  completeTask: (
    taskId: string,
    photoUri: string,
    userNote: string,
  ) => Promise<void>;
};
