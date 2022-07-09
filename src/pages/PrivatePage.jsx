import React from 'react'
// import { Navigate } from 'react-router-dom';

function PrivatePage({ isAuth, login }) {

  if(!isAuth) {
    return (
      <div>
        You must login in to view the Page <br />
        <button type="button" onClick={login}>Login</button>
      </div>
      // <Navigate to="/" />
    )
  }

  return (
    <div>PrivatePage</div>
  )
}

export default PrivatePage