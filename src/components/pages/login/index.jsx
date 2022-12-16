import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const validLoginCredentials = {
  username: 'admin',
  password: 'password'
};

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = event.target.elements;
    if (username.value === validLoginCredentials.username && password.value === validLoginCredentials.password) {
      // Login successful, redirect to homepage
      window.location.replace('/home');
    } else {
      setErrorMessage('Invalid login credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Log in</button>
      <br />
      <Link to="/register">Not registered? Sign up</Link>
    </form>
  );
};

export default LoginPage;
