import { tasksSlice } from './slice';

// export {signInSlice} from './slice'
export const { actions, reducer } = tasksSlice;
export * as Selectors from './selectors';
export * as Types from './types';
