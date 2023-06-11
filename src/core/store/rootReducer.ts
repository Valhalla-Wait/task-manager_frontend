import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { signInSlice } from './slice/SignIn/slice';

const rootReducer = combineReducers({
  [signInSlice.name]: signInSlice.reducer,
});

// create a makeStore function
export const store = configureStore({
  reducer: rootReducer,
});

const makeStore = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootStateType>>(makeStore);

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
