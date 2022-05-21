import React from 'react';

const todos = [
  {
    id: 1,
    title: 'react'
  },
  {
    id: 2,
    title: 'angular'
  }
]

function StateObject() {
  const [messageObj, setMessageObj] = React.useState({ // memory A
    name: 'truong',
    author: 'react',
    message: {
      id: 1,
      text: ''
    }
  });


  function handleChangeMessage(event) {
    const val = event.target.value;
    setMessageObj(prevState => {
      return  {
        ...prevState,
        message: {
          ...prevState.message,
          text: val
        }
      }
    });
  }

  console.log('messageObj: ', messageObj)
  // tranditional function
  // function handleDeleteTodo(todoId) {
  //   console.log('handleDeleteTodo: ', todoId)
  // }

  // curry function
  const handleDeleteTodo = todoId => () => {
    console.log('handleDeleteTodo: ', todoId)
  }

  return (
    <div>
      StateObject <br />
      <input 
        type="text" 
        value={messageObj.message.text} 
        onChange={handleChangeMessage}
      />

    <ul>
      {todos.map(ele => {
        return (
          <li key={ele.id}>
            Title: {ele.title} <br/>
            <button 
              type='button' 
              // onClick={() => handleDeleteTodo(ele.id)} //arrow function 1, re-render: 2, ..3, ..5, ...6
              onClick={handleDeleteTodo(ele.id)} // high priority // 1, 1, 1,1
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>

    </div>
  )
}

export default StateObject