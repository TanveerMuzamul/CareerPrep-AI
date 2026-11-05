// Import the component that tests our FastAPI connection
import BackendTest from "./BackendTest";
import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      <header className="navbar">
        <h2 className="logo">CareerPrep AI</h2>

        <nav>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('login')}>Login</button>
          <button onClick={() => setPage('signup')}>Sign Up</button>
        </nav>
      </header>

      {page === 'home' && (
        <main className="home">
          <h1>Welcome to CareerPrep AI</h1>
          <p>
            AI-Powered Interview and Presentation Preparation Platform
          </p>

          <p>
            Prepare for job interviews and practise presentations using AI.
          </p>

          <button
            className="get-started"
            onClick={() => setPage('signup')}
          >
            Get Started
          </button>

          <section className="features">
            <h2>Main Features</h2>

            <div className="feature-grid">
              <div className="feature-card">
                <h3>CV Upload</h3>
                <p>Upload your CV to prepare for interviews.</p>
              </div>

              <div className="feature-card">
                <h3>AI Interview Practice</h3>
                <p>Practise answering interview questions.</p>
              </div>

              <div className="feature-card">
                <h3>AI Presentation Practice</h3>
                <p>Prepare and practise presentations.</p>
              </div>

              <div className="feature-card">
                <h3>Progress Tracking</h3>
                <p>Track your practice results and improvements.</p>
              </div>
            </div>
          </section>
        </main>
      )}

      {page === 'login' && (
        <main className="auth-section">
          <Login />
          <p>
            Don't have an account?{' '}
            <button onClick={() => setPage('signup')}>
              Sign Up
            </button>
          </p>
        </main>
      )}


      {page === 'signup' && (
        <main className="auth-section">
          <Signup />
          <p>
            Already have an account?{' '}
            <button onClick={() => setPage('login')}>
              Login
            </button>
          </p>
        </main>
      )}

      
      {/* Test the connection between React and FastAPI */}
      {page === 'home' && <BackendTest />}

    </div>
  )
}

export default App
