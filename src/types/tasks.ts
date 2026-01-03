export type Task = {
  id: string;
  description: string;
  completed: boolean;
  userNote: string;
  photoUri: string | null;
  completedAt: string | null;
};
