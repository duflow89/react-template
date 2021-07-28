import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v1 } from 'uuid';
import { todoActions, todoListSelector } from '~/store/sample/todo';

const TodoMain = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const { addTodo, removeTodo, getCompletedTodoAsync, toggleOddItemsOnly } = todoActions;
  const todoList = useSelector(todoListSelector);

  const handleSubmit = () => {
    dispatch(addTodo({ id: v1(), value: todoText }));
  };

  return (
    <>
      <h1>Todo</h1>

      <div>
        <input
          type='text'
          autoComplete='off'
          maxLength={50}
          onChange={({ target }) => setTodoText(target.value)}
        />
        <button type='submit' onClick={handleSubmit}>
          📌
        </button>
      </div>

      <div>
        {!!todoList.length && (
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>{item.value}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodoMain;
