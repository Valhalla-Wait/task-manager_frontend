import { AuthState } from './types';

export const AuthAction = (
  state: AuthState,
  action: {
    payload: {
      email: string;
      password: string;
    };
    type: string;
  },
) => ({
  ...state,
  email: action.payload.email,
  password: action.payload.password,
});

export const removeAuthAction = (state: AuthState) => ({
  ...state,
  email: '',
  password: '',
});

export const setToken = (
  state: AuthState,
  action: {
    payload: {
      token: string | null;
    };
    type: string;
  },
) => ({
  ...state,
  token: action.payload.token,
});

export const removeToken = (state: AuthState) => ({
  ...state,
  token: null,
});
