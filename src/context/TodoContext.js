import React from 'react';

export const TodoContext = React.createContext();

export const TodoProvider = ({ children }) => {
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
  

  function addNewTodo(name) {
    const newTodo =  {
      id: Date.now(),
      title: name,
      status: 'new'
    }
    setTodos([...todos, newTodo])
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addNewTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}