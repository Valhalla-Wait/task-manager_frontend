import { ReducerType } from './types';

export const setSignInDataAction = (
  state: ReducerType,
  action: {
    payload: {
      email: string;
      password: string;
    };
    type: string;
  },
) => ({ ...state, email: action.payload.email, password: action.payload.password });

export const removeSignInDataAction = (state: ReducerType) => ({
  ...state,
  email: '',
  password: '',
});
