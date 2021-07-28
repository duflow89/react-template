import { mockResolve } from '~/api/utils';
import { api } from '~/api/apiBase';
import { mockCompletedTodoList } from './mockTodo';

export const todoApi = {
  getCompletedTodoAsyncApi: () => api.get('/getTodo', { params: { date: '20210505' } }),
  getCompletedTodoAsyncMockResolve: (isEvenItemsOnly: boolean) =>
    mockResolve(
      isEvenItemsOnly
        ? mockCompletedTodoList.filter((_, index) => index % 2 === 0)
        : mockCompletedTodoList,
    ),
};
