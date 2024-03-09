import { RootState } from '../store';

export const selectIsLoggedin = (state: RootState) => state.auth.isLoggedin;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;