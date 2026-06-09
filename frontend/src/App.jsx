import React, { useState } from 'react';
import Login from './pages/Login.jsx';
import Users from './pages/Users.jsx';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <Users onLogout={() => setLoggedIn(false)} />
      ) : (
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;