import { PayloadAction } from '@reduxjs/toolkit';
import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { mockCompletedTodoList } from '~/api/mock/todo';
import { todoApi } from '~/api/url/sample/todo';
import { loadingActions } from '~/store/common/loading';
import {
  getCompletedTodoAsyncSaga,
  isOddItemsSelector,
  todoActions,
  todoInitState,
  todoListSelector,
  todoReducer,
} from '~/store/sample/todo';
import { TodoInitialState, TodoItemType } from '~/type/todo';

describe('store/counter', () => {
  const { addTodo, removeTodo, getCompletedTodoAsync, toggleOddItemsOnly } = todoActions;

  describe('reducer', () => {
    it('when dispatch addTodo action', () => {
      const mockState: TodoItemType = { id: 'id', value: 'value' };
      const expected: TodoInitialState = {
        ...todoInitState,
        list: [...todoInitState.list, mockState],
      };
      const reducer = todoReducer(todoInitState, addTodo(mockState));
      expect(reducer).toEqual(expected);
    });

    it('when dispatch removeTodo action', () => {
      const firstState: TodoInitialState = {
        ...todoInitState,
        list: [...todoInitState.list, { id: 'id', value: 'value' }],
      };
      const expected: TodoInitialState = {
        ...todoInitState,
        list: [...todoInitState.list],
      };
      const reducer = todoReducer(firstState, removeTodo('id'));
      expect(reducer).toEqual(expected);
    });

    it('when dispatch getCompletedTodoAsync.success action', () => {
      const expected: TodoInitialState = {
        ...todoInitState,
        list: [...todoInitState.list, ...mockCompletedTodoList],
      };
      const reducer = todoReducer(
        todoInitState,
        getCompletedTodoAsync.success(mockCompletedTodoList),
      );
      expect(reducer).toEqual(expected);
    });

    it('when dispatch toggleOddItemsOnly action', () => {
      const firstExpected: TodoInitialState = {
        ...todoInitState,
        isOddItemsOnly: true,
      };
      const firstReducer = todoReducer(todoInitState, toggleOddItemsOnly());
      expect(firstReducer).toEqual(firstExpected);

      const secondExpected: TodoInitialState = {
        ...todoInitState,
        isOddItemsOnly: false,
      };
      const secondReducer = todoReducer(firstExpected, toggleOddItemsOnly());
      expect(secondReducer).toEqual(secondExpected);
    });
  });

  describe('selector', () => {
    describe('todoListSelector', () => {
      it('Default ', () => {
        const mockStore: any = {
          sample: {
            todo: {
              isOddItemsOnly: false,
              list: mockCompletedTodoList,
            },
          },
        };
        expect(todoListSelector(mockStore)).toEqual(mockCompletedTodoList);
      });

      it('If isOddItemsOnly is true', () => {
        const mockStore: any = {
          sample: {
            todo: {
              isOddItemsOnly: true,
              list: mockCompletedTodoList,
            },
          },
        };
        const expected = mockCompletedTodoList.filter((_, index) => index % 2 === 0);

        expect(todoListSelector(mockStore)).toEqual(expected);
      });
    });

    describe('isOddItemsSelector', () => {
      const mockStore: any = {
        sample: {
          todo: {
            isOddItemsOnly: false,
          },
        },
      };
      expect(isOddItemsSelector(mockStore)).toEqual(false);
    });
  });

  describe('saga', () => {
    describe('getCompletedTodoAsyncSaga', () => {
      const payload = false;
      it('success flow', () =>
        expectSaga(getCompletedTodoAsyncSaga, <PayloadAction<boolean>>{ payload })
          .provide([[call.fn(todoApi.getCompletedTodoAsync), mockCompletedTodoList]])
          .put(loadingActions.startLoading())
          .call.fn(todoApi.getCompletedTodoAsync)
          .put(getCompletedTodoAsync.success(mockCompletedTodoList))
          .put(loadingActions.endLoading())
          .run());

      it('failure flow', () => {
        const mockError = new Error('error');
        return expectSaga(getCompletedTodoAsyncSaga, <PayloadAction<boolean>>{ payload })
          .provide([[call.fn(todoApi.getCompletedTodoAsync), throwError(mockError)]])
          .put(loadingActions.startLoading())
          .call.fn(todoApi.getCompletedTodoAsync)
          .put(getCompletedTodoAsync.failure(mockError))
          .put(loadingActions.endLoading())
          .run();
      });
    });
  });
});
