import React from 'react';

// components
import ButtonSimple from '../components/ButtonSimple';
import InputSimple from '../components/InputSimple';
    
function ConditionalRender() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'react',
    },
    {
      id: 2,
      title: 'angular'
    },
    {
      id: 3,
      title: 'vue'
    },
    {
      id: 4,
      title: 'svelete'
    }
  ]);


  const [isAuth, setIsAuth] = React.useState(false);
  let button = null;

  if(isAuth) {
    button = <ButtonSimple text="logout" />
  } else {
    button = <ButtonSimple text="login" />
  }

  function renderButtonLogin() {
    return <ButtonSimple text="login" />
  }

  function renderButtonLogout() {
    return <ButtonSimple text="logout" />
  }

  function renderButton(_isAuth) {
    return (
      <>
        {_isAuth ? renderButtonLogout() : renderButtonLogin()}
      </>
    )
  }

  function handleDeleteTodo(todoId) {
    const todoIndex = todos.findIndex(todo => todo.id === todoId)
    const newTodo = [...todos];
    newTodo.splice(todoIndex, 1);

    // const newTodo = [...todos].filter(todo => todo.id !== todoId);
    setTodos(newTodo)
  }

  return (
    <div>
      <ButtonSimple
        text="Check Auth"       
        onClick={() => setIsAuth(prevState => !prevState)}
      />    <br />
      State auth: {isAuth.toString()}
      {isAuth ? (
        <div>
          Welcome to {button}
        </div>
      ) : (
        <div>
          Guest {button}    
        </div>     
      )}

      <h6>Render with function</h6>
      {renderButton(isAuth)}
      {/* {isAuth ? renderButtonLogout() : renderButtonLogin()} */}


      <h3>List & Keys</h3>
      <InputSimple /> <ButtonSimple text="Add Todo" />
      {todos.length > 0 ? (
        <>
          {todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <br />
              ID: {todo.id} <br />
              Title: {todo.title} <br />
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </React.Fragment>
          ))}
        </>
      ) : null}
    </div>
  )
}

export default ConditionalRender