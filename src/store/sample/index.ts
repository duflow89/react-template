import { combineReducers } from '@reduxjs/toolkit';
import { todoReducer, todoSaga } from './todo';

export const sampleRootReducer = combineReducers({
  todo: todoReducer,
});

export const sampleRootSaga = [...todoSaga];
