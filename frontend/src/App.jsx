
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import './App.css'

function App() {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div>
      <h1>CareerPrep AI</h1>
      <p>AI-Powered Interview and Presentation Preparation Platform</p>

      <h2>Welcome to CareerPrep AI</h2>
      <p>
        Prepare for job interviews and practise presentations using AI.
      </p>

      <h3>Main Features</h3>
      <ul>
        <li>CV Upload</li>
        <li>AI Interview Practice</li>
        <li>AI Presentation Practice</li>
        <li>Progress Tracking</li>
      </ul>

      {showSignup ? <Signup /> : <Login />}

      <p>
        {showSignup ? 'Already have an account?' : "Don't have an account?"}
        {' '}
        <button
          type="button"
          onClick={() => setShowSignup(!showSignup)}
        >
          {showSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  )
}

export default App
