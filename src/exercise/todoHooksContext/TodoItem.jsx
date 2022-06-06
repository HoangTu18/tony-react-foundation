import React from 'react'

function TodoItem({ todo } ) {
  return (
    <div>
      Title: {todo.title} <br />
      Status: {todo.status} <br />
      <button type="button">Complete</button>
    </div>
  )
}

export default TodoItem