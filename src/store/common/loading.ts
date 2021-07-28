import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '~/store/rootReducer';

const initialState = { loadingCount: 0 };

// If using createSlice
const { actions, reducer } = createSlice({
  name: 'common/loading',
  initialState,
  reducers: {
    startLoading: (state) => ({
      ...state,
      loadingCount: state.loadingCount + 1,
    }),
    endLoading: (state) => ({
      ...state,
      loadingCount: state.loadingCount - 1,
    }),
    clearLoading: (state) => ({
      ...state,
      loadingCount: 0,
    }),
  },
});

export const loadingSelector = (state: RootState) => state.common.loading;
export const isLoadingSelector = createSelector([loadingSelector], (state) => !!state.loadingCount);

export {
  actions as loadingActions,
  reducer as loadingReducer,
  initialState as loadingInitialState,
};
