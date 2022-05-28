import React from 'react'

function TodoItem({ todo, handleCompleteTodo } ) {
  console.log('toto item: ', todo)
  return (
    <div>
      Title: {todo.title} <br />
      Status: {todo.status} <br />
      <button type="button" onClick={() => handleCompleteTodo(todo.id)}>Complete</button>
    </div>
  )
}

export default TodoItem