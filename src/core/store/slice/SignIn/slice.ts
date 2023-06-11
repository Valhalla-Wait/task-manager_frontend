import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { setSignInDataAction, removeSignInDataAction } from './actions';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setSignInDataAction,
    removeSignInDataAction,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.signIn,
      };
    },
  },
});
