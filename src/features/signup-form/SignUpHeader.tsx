import { Link } from "react-router"
import logo from "../../assets/images/logo.png"
function SignUpHeader() {
  return (
    <div>
      <Link to='/' className="logo-container">
        <img src={logo} alt="logo" className="logo-img-signup" />
      </Link>
      <h2 className="signup-title" >Welcome back</h2>
      <p className="signup-text">Welcome back! Please enter your details.</p>
    </div>
  )
}

export default SignUpHeader
