import { combineReducers } from 'redux';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
});

export default mainReducer;
