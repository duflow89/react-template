import { v4 } from 'uuid';
import { TodoItemType } from '~/type/todo';

export const mockCompletedTodoList: TodoItemType[] = [
  { id: v4(), value: 'Play coding' },
  { id: v4(), value: 'Feeding the Cat' },
  { id: v4(), value: 'Shopping at E-mart' },
  { id: v4(), value: 'Call mommy' },
  { id: v4(), value: 'Stay at home' },
];
