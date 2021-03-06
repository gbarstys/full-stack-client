import { RootState } from '../../redux-types';

export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthUser = (state: RootState) => state.auth.admin;
export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthLoggedIn = (state: RootState) => Boolean(state.auth.admin);
export const selectAuthToken = (state: RootState) => state.auth.token;
