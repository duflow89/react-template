import { createAction } from '@reduxjs/toolkit';

export function createAsyncAction<I, S, F>(actionType: string) {
  return {
    index: createAction<I>(`${actionType}`),
    success: createAction<S>(`${actionType}/success`),
    failure: createAction<F>(`${actionType}/failure`),
  };
}
