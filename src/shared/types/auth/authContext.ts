import { User } from "core/api/generated_types";

export type AuthContextType = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};
