import { User } from 'core/api/generated_types';
import { useRouter } from 'next/router';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { AuthContextType } from 'shared/types/auth/authContext';
import { ComponentWithAuthFields } from 'shared/types/auth/authPage';

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export const AuthProvider: FC<PropsWithChildren<ComponentWithAuthFields>> = ({
  children,
  Component: { isOnlyAuth },
}) => {
  const [user, setUser] = useState<User | null>(null);
  const { replace } = useRouter();
  useEffect(() => {
    if (isOnlyAuth && !user) replace('/auth');
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
