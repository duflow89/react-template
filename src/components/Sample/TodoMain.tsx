import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { isOddItemsSelector, todoActions, todoListSelector } from '~/store/sample/todo';

const TodoMain = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const { addTodo, removeTodo, getCompletedTodoAsync, toggleOddItemsOnly } = todoActions;
  const todoList = useSelector(todoListSelector);
  const isOddItems = useSelector(isOddItemsSelector);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo({ id: v4(), value: todoText }));
  };

  const handleDelete = (id: string) => () => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <h1>Todo {isOddItems && <b>Only odd Items 👆</b>}</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          autoComplete='off'
          maxLength={50}
          onChange={({ target }) => setTodoText(target.value)}
        />
        <button type='submit'>📌</button>
      </form>

      <br />
      <div className='todo-buttons'>
        <button type='button' onClick={() => dispatch(getCompletedTodoAsync.index(isOddItems))}>
          Get completed items
        </button>
        <button type='button' onClick={() => dispatch(toggleOddItemsOnly())}>
          Toggle odd items only
        </button>
      </div>

      <div className='todo'>
        {!!todoList.length && (
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                {item.value}
                <button type='button' onClick={handleDelete(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default TodoMain;
