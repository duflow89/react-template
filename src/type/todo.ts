export interface TodoItemType {
  id: string;
  value: string;
}

export interface TodoInitialState {
  list: TodoItemType[];
  isOddItemsOnly: boolean;
}
