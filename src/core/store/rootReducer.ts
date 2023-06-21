import { combineReducers, configureStore, Store } from '@reduxjs/toolkit';
import { api } from 'core/api/generated_types';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { userApi } from './slice/Auth/queries';
import { signInSlice } from './slice/SignIn/slice';
import { usersSlice } from './slice/Users/slice';

const rootReducer = combineReducers({
  [signInSlice.name]: signInSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
  [api.reducerPath]: api.reducer,
});

// create a makeStore function
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false
    }).concat(api.middleware),
});

const makeStore = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootStateType>>(makeStore);

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
