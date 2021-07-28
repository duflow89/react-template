import { createBrowserHistory } from 'history';
import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { commonRootReducer } from './common';
import { sampleRootReducer } from './sample';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
  common: commonRootReducer,
  sample: sampleRootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
