import { Link, useLocation } from "react-router"
import SignUpHeader from "./SignUpHeader"

function SignUpForm() {
  const location = useLocation()
  const confirmPassword = location.pathname === "/signup" && (
    <label htmlFor="confirmPassword">
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className="form-control"
        placeholder="Confirm Password"
      />
    </label>
  )

  const renderText = location.pathname === "/login" ? (
    <p className="signup-footer-text">
      Need an account?{" "}
      <Link to="/signup" className="signup-link">
        Create an account
      </Link>
    </p>
  ) :(
    <p className="signup-footer-text">
      Already have an account?{" "}
      <Link to="/login" className="signup-link">
       Sign In
      </Link>
    </p>
  )

  return (
    <div className="form-section">
      <form className="signup-form">
        <SignUpHeader />
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
        </label>
        {confirmPassword}
        <div className="signup-buttons">
          <button className="signin">sign in</button>
          <button className="google-button">sign in with google</button>
        </div>
        {renderText}
      </form>
    </div>
  )
}

export default SignUpForm
