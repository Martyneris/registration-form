import React from 'react';
import './sass/main.scss';
import RegisterForm from './containers/RegisterForm/container.js'
import UsersList from './containers/UsersList/container.js'

const App = () => {
  return (
    <div className="App">
      <RegisterForm />
      <UsersList />
    </div>
  );
}

export default App;
