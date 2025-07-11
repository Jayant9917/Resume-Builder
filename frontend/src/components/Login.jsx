import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { API_PATHS } from '../utils/apiPaths'
import axiosInstance from '../utils/axiosInstance'
import { validateEmail } from '../utils/helper'
import { Input } from './Input'


import { authStyles as Styles } from '../assets/dummystyle'

const Login = ({ setCurrentPage }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    if (!password) {
      setError('Please enter a password');
      return;
    }
    setError('');
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, { email, password });
      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    }
    catch (error) {
      setError(error.response?.data?.message || 'something went wrong. Please try again');
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.headerWrapper}>
        <h3 className={Styles.title}>Welcome Back</h3>
        <p className={Styles.subtitle}>
          Sign in to continue build in amazing resume
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleLogin} className={Styles.form}>
        <Input value={email} onChange={({ target }) => setEmail(target.value)}
          label='Email'
          placeholder='Jay@gmail.com'
          type='email' />

        <Input value={password} onChange={({ target }) => setPassword(target.value)}
          label='Password'
          placeholder='Min 8 characters'
          type='password' />

          {error && <div className={Styles.errorMessage}>{error}</div>}

          <button type='submit' className={Styles.submitButton}>
            SignIn
          </button>
          <p className={Styles.switchText}>
            Don't have an account?{''}
            <button type='button' 
            className={Styles.switchButton} 
            onClick={() => setCurrentPage('signup')}>
              Sign Up
            </button>
          </p>
      </form>
    </div>
  )
}

export default Login
