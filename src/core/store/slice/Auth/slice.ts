import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { setToken } from './actions';

const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken,
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.auth,
  //     };
  //   },
  // },
});
