export type AuthContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
};

export type UserType = {
  name: string;
  surname: string;
} | null;
