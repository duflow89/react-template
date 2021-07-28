import { combineReducers } from '@reduxjs/toolkit';
import { loadingReducer } from './loading';

export const commonRootReducer = combineReducers({
  loading: loadingReducer,
});
