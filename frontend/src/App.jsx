import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import UserProvider from './context/UserContext.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => {
  return (
    <UserProvider>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </UserProvider>
  )
}

export default App
