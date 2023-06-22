import { LoginUser } from 'core/api/generated_types';

export type AuthContextType = {
  user: LoginUser | null | undefined;
  setUser: (user: LoginUser | null | undefined) => void;
};
