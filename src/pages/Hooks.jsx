import React, { useCallback } from 'react'
import TodosHooksContext from '../exercise/TodosHooksContext';

import ButtonLike from '../components/ButtonLike';
import { useMemo } from 'react';


function Hooks() {
  const [todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [nameButton, setNameButton] = React.useState({
    name: 'memo',
    text: 'Submit'
  })

const isPagination = 1;

  //  check logic todo
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(res => res.json())
      .then(data =>{
        setTodos(data);
        setNameButton(prevState => {
          return {
            // name: `name button-${Math.random()}`,
            ...prevState,
            // text: `fetch todo-${Math.random()}`
          }
        })
      })
  }, [page])

  React.useEffect(() => {
    console.log('useeffect 2')
  }, [])


  const isPage = useMemo(() => {
    return isPagination === 1;
  }, []) 

  console.log("isPage: ", isPage)


  // function fetchTodos() {
  //   fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
  //     .then(res => res.json())
  //     .then(data => setTodos(data))
  // }

  const handlePreventCallback = useCallback(() => {
    // do something
    if(page > 3) {
      console.log('handlePreventCallback: ');
    }
  }, [page])

  return (
    <div>
    Todo List

    {todos.length > 0 ? (
      <>
        {todos.map(todo => (
          <div key={todo.id}>
            id: {todo.id}<br />
            title: {todo.title}
          </div>
        ))}
      </>
    ) : (
      <div>No data available</div>
    )}

    page: <input type="text" value={page} onChange={e => setPage(Number(e.target.value))}/>
    <button type="button" onClick={() => {
      setPage(prevState => prevState + 1)
    }}>
      page {page}
    </button>

    <h4>memo + useCallback button like</h4>
    <ButtonLike 
      name={nameButton.name}
      text={nameButton.text}
      onClick={handlePreventCallback}
    />

    <h3> Use Context </h3>
    <TodosHooksContext />


   
    <br />
    </div>
  )
}

export default Hooks