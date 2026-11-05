
function Signup() {
  return (
    <div className="login-page">
      <h2>Create Your Account</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            required
          />
        </div>

        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
