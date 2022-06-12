
import React, { useReducer } from 'react';

import { initialState, reducer, setIsLoading, setIsError, setTodos } from './reducer/user.reducer';

function UserReducer() {
  // state 
  const [{ isLoading, isError, todos }, dispatch] = useReducer(reducer, initialState);
  
  // actions
  async function handleFetchData() {
    dispatch(setIsLoading(true));
    dispatch(setIsError(false));
    try {
      const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
      const data = await res.json();
      dispatch(setTodos(data.data));
    } catch(error) {
      dispatch(setIsError(true));
    }
    dispatch(setIsLoading(false));
  }

  // view
  if(isLoading) return <div>Loading ....</div>

  if(isError) return <div>Something error ....</div>

  return (
    <div>
      {todos.length  === 0 ? (
        <div>
          No data available .... <br />
        </div>
      ) : (
        <>
         {todos.map((todo, index) => (
            <div key={index}>
              ID: {todo.id} <br />
              Title: {todo.title}
            </div>
          ))}
        </>
      )}
      <button type="button" onClick={(handleFetchData)}>Fetch data</button>
    </div>
  )
}

export default UserReducer