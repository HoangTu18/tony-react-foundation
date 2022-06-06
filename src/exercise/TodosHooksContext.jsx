import React from 'react';
import TodoList from './todoHooksContext/TodoList';

import { TodoProvider } from '../context/TodoContext';

function TodosHooksContext() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  )
}

export default TodosHooksContext