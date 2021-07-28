import { createAction, createReducer, createSelector, PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeLeading } from 'redux-saga/effects';
import { v1 } from 'uuid';
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
  toggleOddItemsOnly: createAction<boolean>(`${TYPE}/toggleOddItemsOnly`),
};

const { addTodo, removeTodo, getCompletedTodoAsync, toggleOddItemsOnly } = todoActions;

const initialState: TodoInitialState = {
  list: [],
  isOddItemsOnly: false,
};

export const todoReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(addTodo, ({ list }, { payload }) => {
      list.push(payload); // builtin 'immer' on Redux Toolkit
    })
    .addCase(removeTodo, (state, { payload }) => ({
      ...state,
      list: state.list.filter((todo) => todo.id !== payload),
    }))
    .addCase(getCompletedTodoAsync.success, (state, { payload }) => ({
      ...state,
      list: [...payload, ...state.list],
    }))
    .addCase(toggleOddItemsOnly, (state, { payload }) => ({
      ...state,
      isOddItemsOnly: payload,
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
    yield put(loadingActions.endLoading());

    if (response.length < 5)
      yield put(
        addTodo({
          id: v1(),
          value: 'This is added when the response length is less than 5',
        }),
      );
  } catch (e) {
    yield put(getCompletedTodoAsync.failure(e));
  }
}

export const todoSaga = [takeLeading(getCompletedTodoAsync.index.type, getCompletedTodoAsyncSaga)];
