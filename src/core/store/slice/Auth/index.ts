import { authSlice } from './slice';

// export {signInSlice} from './slice'
export const { actions, reducer } = authSlice;
export * as Selectors from './selectors';
export * as Types from './types';
