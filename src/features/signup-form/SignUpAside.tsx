import signupPic from "../../assets/images/signup-pic.jpg"
function SignUpAside() {
  return (
    <aside className="signin-aside">
      <div className="overlay-signin"></div>
      <img src={signupPic} alt="" className="" />
      <p className="signin-aside-text">Get 10% discount on any products when you signup</p>
    </aside>
  )
}

export default SignUpAside
