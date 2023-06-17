import { createSlice } from '@reduxjs/toolkit';
import { AuthAction, removeAuthAction } from './actions';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AuthAction,
    removeAuthAction,
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.signIn,
  //     };
  //   },
  // },
});
