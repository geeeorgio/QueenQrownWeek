export const STORAGE_KEYS = [
  'isOnboardingCompleted',
  'isRegistrationCompleted',
  'userData',
  'artefactsCount',
  'tasksHistory',
  'exchangeHistory',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
