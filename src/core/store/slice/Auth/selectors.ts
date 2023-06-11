import { createSelector } from '@reduxjs/toolkit';
import { RootStateType } from 'core/store/rootReducer';

const selectAuth = (state: RootStateType) => state.signIn;

export const AuthDataSelector = createSelector(selectAuth, (authState) => authState);
