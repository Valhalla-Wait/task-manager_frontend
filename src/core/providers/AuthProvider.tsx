import { client } from 'core/api/baseApi';
import { LoginUser } from 'core/api/generated_types';
import { useAppDispatch, useAppSelector } from 'core/store';
import { authSlice } from 'core/store/slice/Auth/slice';
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
  const [user, setUser] = useState<LoginUser | null | undefined>(null);
  console.log(user);
  const { replace } = useRouter();
  const dispatch = useAppDispatch();
  const storeToken = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (isOnlyAuth && !storeToken && !token) replace('/auth');
    if (token) client.setHeader('authorization', token);
    if (token && !storeToken) dispatch(authSlice.actions.setToken({ token }));
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
