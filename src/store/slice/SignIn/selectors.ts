import { RootStateType } from "@/store/rootReducer";
import { createSelector } from "@reduxjs/toolkit";

const selectSignIn = (state: RootStateType) => state.signIn;

export const signInSelector = createSelector(selectSignIn, (signInState) => signInState.email);