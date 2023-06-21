import { createSlice } from '@reduxjs/toolkit';
import { AuthAction, removeAuthAction } from './actions';

const initialState = {
  data: null,
  isLoading: false,
  error: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.signIn,
  //     };
  //   },
  // },
});
