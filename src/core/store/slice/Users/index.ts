import { usersSlice } from './slice';

// export {signInSlice} from './slice'
export const { actions, reducer } = usersSlice;
export * as Selectors from './selectors';
export * as Types from './types';
