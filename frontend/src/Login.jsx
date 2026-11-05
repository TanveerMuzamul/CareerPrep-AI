
function Login() {
  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      
    </div>
  )
}

export default Login
