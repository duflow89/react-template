import { createAction, createReducer, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';
import { todoApi } from '~/api/url/sample/todo';
import { TodoInitialState, TodoItemType } from '~/type/todo';
import { loadingActions } from '../common/loading';
import { RootState } from '../rootReducer';
import { createAsyncAction } from '../utils';

const TYPE = 'todo';
export const todoActions = {
  addTodo: createAction<TodoItemType>(`${TYPE}/addTodo`),
  removeTodo: createAction<string>(`${TYPE}/removeTodo`),
  getCompletedTodoAsync: createAsyncAction<boolean, TodoItemType[], Error>(`${TYPE}/getTodo`),
  toggleOddItemsOnly: createAction(`${TYPE}/toggleOddItemsOnly`),
};

const { addTodo, removeTodo, getCompletedTodoAsync, toggleOddItemsOnly } = todoActions;

const initialState: TodoInitialState = {
  list: [],
  isOddItemsOnly: false,
};

export const todoReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addTodo, (state, { payload }) => ({
      ...state,
      list: [...state.list, payload],
      isOddItemsOnly: false,
    }))
    .addCase(removeTodo, (state, { payload }) => ({
      ...state,
      list: state.list.filter((todo) => todo.id !== payload),
      isOddItemsOnly: false,
    }))
    .addCase(getCompletedTodoAsync.success, (state, { payload }) => ({
      ...state,
      list: [...payload, ...state.list],
    }))
    .addCase(toggleOddItemsOnly, (state) => ({
      ...state,
      isOddItemsOnly: !state.isOddItemsOnly,
    })),
);

export const todoSelector = (state: RootState) => state.sample.todo;

export const todoListSelector = createSelector([todoSelector], ({ list, isOddItemsOnly }) =>
  isOddItemsOnly ? list.filter((_, index) => index % 2 === 0) : list,
);

export const isOddItemsSelector = createSelector([todoSelector], (state) => state.isOddItemsOnly);

export function* getCompletedTodoAsyncSaga({ payload }: PayloadAction<boolean>) {
  try {
    yield put(loadingActions.startLoading());
    const response: TodoItemType[] = yield call(todoApi.getCompletedTodoAsyncMockResolve, payload);
    yield put(getCompletedTodoAsync.success(response));
    yield put(loadingActions.endLoading());
  } catch (e) {
    yield put(getCompletedTodoAsync.failure(e));
  }
}

export const todoSaga = [takeLeading(getCompletedTodoAsync.index.type, getCompletedTodoAsyncSaga)];
