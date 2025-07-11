import React from 'react'
import { authStyles as Styles } from '../assets/dummystyle'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../utils/helper'
import axiosInstance from '../utils/axiosInstance'
import { API_PATHS } from '../utils/apiPaths'
import { Input } from './Input'

const SignUp = ({ setCurrentPage }) => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName) {
      setError('Please enter your full name');
      return;
    }
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
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password
      });
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
    <div className={Styles.signupContainer}>
      <div className={Styles.headerWrapper}>
        <h3 className={Styles.signupTitle}>Create Account</h3>
        <p className={Styles.signupSubtitle}>Join Thousands of Professionals today</p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSignUp} className={Styles.signupForm}>
        <Input value={fullName} onChange={({ target }) => setFullName(target.value)}
          label='Full Name'
          placeholder='Jay Rana'
          type='text' />
        <Input value={email} onChange={({ target }) => setEmail(target.value)}
          label='Email'
          placeholder='user@gmail.com'
          type='email' />
        <Input value={password} onChange={({ target }) => setPassword(target.value)}
          label='Password'
          placeholder='Min 8 characters'
          type='password' />

        {error && <div className={Styles.errorMessage}>{error}</div>}
        <button type='submit' className={Styles.signupSubmit}>
          Create Account
        </button>

        {/* Footer */}
        <p className={Styles.switchText}>
          Already have an account?{''}
          <button onClick={() => setCurrentPage('login')}
            type='button' className={Styles.signupSwitchButton}>
            Sign In
          </button>
        </p>
      </form>
    </div>
  )
}

export default SignUp
