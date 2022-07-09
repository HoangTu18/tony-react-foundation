import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';

import PublicPage from './PublicPage';
import PrivatePage from './PrivatePage';

const fakeAuth = {
  isAuthenticated: false,
  login(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  logout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
}

function Authenticate() {
  const [isAuth, setIsAuth] = React.useState(fakeAuth.isAuthenticated);


  function login() {
    fakeAuth.login(() => {
      setIsAuth(true);
    })
  }

  function logout() {
    fakeAuth.logout(() => {
      setIsAuth(false);
    })
  }
    
  return (
    <div>
      {isAuth ? (
        <div>Welcome to <button type="button" onClick={logout}>Logout</button></div>
      ) : (
        <>Your are not logged in</>
      )}

      <ul>
        <li>
          <Link to="/public">Public Page</Link> | {' '} 
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Routes>
        <Route 
          path="/public" element={<PublicPage isAuth={isAuth} />}
        />
        <Route 
          path="/protected" element={<PrivatePage isAuth={isAuth} login={login} />}
        />
    </Routes>

    </div>
  )
}

export default Authenticate