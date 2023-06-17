import { ReducerType } from './types';

export const AuthAction = (
  state: ReducerType,
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

export const removeAuthAction = (state: ReducerType) => ({
  ...state,
  email: '',
  password: '',
});
