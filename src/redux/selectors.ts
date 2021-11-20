import { GlobalState } from './state';

export const selectAllState = (state: GlobalState): ReturnType<any> => state.currency;
