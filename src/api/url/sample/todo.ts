import { apiConverter, mockResolve } from '~/api/utils';
import { api } from '~/api/apiBase';
import { mockCompletedTodoList } from '~/api/mock/todo';

const realApi = {
  getCompletedTodoAsync: (isEvenItemsOnly: boolean) =>
    api.get('/getTodo', { params: { isEvenItemsOnly } }),
};

const mockApi = {
  getCompletedTodoAsync: (isEvenItemsOnly: boolean) =>
    mockResolve(
      isEvenItemsOnly
        ? mockCompletedTodoList.filter((_, index) => index % 2 === 0)
        : mockCompletedTodoList,
    ),
};

export const todoApi = {
  getCompletedTodoAsync: (isEvenItemsOnly: boolean) =>
    apiConverter(realApi.getCompletedTodoAsync, mockApi.getCompletedTodoAsync, isEvenItemsOnly),
};
