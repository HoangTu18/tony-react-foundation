import React, { useContext } from 'react'
import TodoItem from './TodoItem'

import { TodoContext } from '../../context/TodoContext';


function TodoList() {
  const nameRef = React.useRef();
  const { todos, addNewTodo } = useContext(TodoContext);

  return (
    <div>
      Add Todo: 
      <input ref={nameRef} type="text" /> <br />
      <button type='button' onClick={() => addNewTodo(nameRef.current.value)}>Add new Todo</button> 
      {todos.map(todo => (
        <TodoItem 
          todo={todo}
        />
      ))}

    </div>
  )
}

export default TodoList