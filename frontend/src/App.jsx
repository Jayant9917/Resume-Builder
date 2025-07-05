import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Login from './pages/auth/login';
import SignUp from './pages/auth/signUp';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Home/Dashboard';
import InterviewPrep from './pages/InterviewPrep/InterviewPrep';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Home Routes */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Interview Prep Routes */}
          <Route path="/interview-prep" element={<InterviewPrep />} />
        </Routes>
      </Router>

      <Toaster
      toastOptions={{
        className: "",
        style: {
          fontSize: "13px",
        },
      }}
      />
    </div>
  )
}

export default App
