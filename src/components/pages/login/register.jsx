import React, { useState } from 'react';

const validLoginCredentials = {
  username: 'admin',
  password: 'password'
};

const RegistrationPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = event.target.elements;
    if (username.value === validLoginCredentials.username) {
      setErrorMessage('Username is already taken');
    } else if (username.value && password.value) {
      // Registration successful, redirect to login page
      window.location.replace('/login');
    } else {
      setErrorMessage('Please enter a valid username and password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Sign up</button>
    </form>
  );
};

export default RegistrationPage;
