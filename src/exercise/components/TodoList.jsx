import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, handleCompleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}

    </div>
  )
}

export default TodoList