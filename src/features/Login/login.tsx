// src/features/login/Login.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation } from './loginApi';
import { setCredentials } from './loginSlice';
// import { toast } from 'react-toastify';

const LoginUser: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginUser({ username, password }).unwrap();
      dispatch(setCredentials(userData));
      setMessage('Login successful!');
      console.log('Login successful:', userData)
      
      // Optionally, handle success actions like redirecting to another page
    } catch (error) {
      
      setMessage('Login failed!');
      console.error('Failed to login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginUser;
