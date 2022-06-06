import React from 'react'
import TodosHooksContext from '../exercise/TodosHooksContext';

function Hooks() {
  const [todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1)

  //  check logic todo
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [page])

  React.useEffect(() => {
    console.log('useeffect 2')
  }, [])

  function fetchTodos() {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(res => res.json())
      .then(data => setTodos(data))
  }

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

    <h3> Use Context </h3>
    <TodosHooksContext />
    </div>
  )
}

export default Hooks