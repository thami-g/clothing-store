import SignUpForm from "./SignUpForm"
import SignUpAside from "./SignUpAside"
import "./signup-section.css"
import { useLocation } from "react-router"

function SignUpSection() {
  const location = useLocation()
  return (
    <section className="signup-container">
      <div className="signup-section">
        <SignUpForm />
        <SignUpAside />
      </div>
    </section>
  )
}

export default SignUpSection
