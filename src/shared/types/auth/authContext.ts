import { User } from 'core/api/generated_types';

export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
