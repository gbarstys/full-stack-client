import { ThunkDispatch } from 'redux-thunk';
import { AuthState, AuthAction } from './features/auth/auth-types';
import { NavigationState, NavigationAction } from './features/navigation/navigation-types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState,
};

export type AppAction = AuthAction | NavigationAction;

export type AppDispatch = ThunkDispatch<RootState, undefined, AppAction>;
