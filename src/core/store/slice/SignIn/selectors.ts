import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from 'core/store/rootReducer';

const selectSignIn = (state: RootStateType) => state.signIn;

export const signInEmailSelector = createSelector(
  selectSignIn,
  (signInState) => signInState.email,
);
