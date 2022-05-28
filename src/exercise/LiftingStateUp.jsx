import React from 'react'

import TodoList from './components/TodoList';

function LiftingStateUp() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'learn react',
      status: 'new'
    },
    {
      id: 2,
      title: 'learn angular',
      status: 'new'
    }
  ]);

  function handleCompleteTodo(todoId) {
    console.log('handleCompleteTodo: ', todoId)
  }

  const lists = [];
  const fruist = ['oragne', 'watermelon'];

  for (const item of fruist) {
    lists.push(
      <li>fuirst: {item}</li>
    )
  }


  return (
    <div>
      <TodoList 
        todos={todos} 
        handleCompleteTodo={handleCompleteTodo}
      />
      
      {/* {fruist.map(item => (
        <li>fuirst: {item}</li>
      ))} */}

      {fruist.map(item => {
        return (
          <li>fuirst: {item}</li>
        )
      })}

      <br />
      {lists}

    </div>
  )
}

export default LiftingStateUp