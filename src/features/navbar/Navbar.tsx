import { FaHeart } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

import logo from "../../assets/images/logo.png"
import "./navbar.css"
import { Link, NavLink, useLocation } from "react-router"

function Navbar() {
  const location = useLocation()
  const isHomePage = `navbar ${location.pathname === "/" ? "navbar-transparent" : ""}`
  const render = false ? (
    <NavLink to="#" className="nav-icon">
      <CgProfile size={30} />
    </NavLink>
  ) : (
    <div className="login-links">
      <NavLink to="/login" className="login">
        Login
      </NavLink>
      |
      <NavLink to="/signup" className="login">
        Signup
      </NavLink>
    </div>
  )

  switch (location.pathname) {
    case "/login":
    case "/signup":
    case "/cart":
    case "/address":
    case "/payment":
      return null
  }

  return (
    <nav className={`${isHomePage}`}>
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </NavLink>

      <div className="links">
        <NavLink to="/new">New & Featured</NavLink>
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/kids">Kids</NavLink>
      </div>
      <form className="search-form">
        <div className="search-bar">
          <input className="search-input" type="text" placeholder="search" />
          <Link className="search-submit" to="#">
            <FaSearch />
          </Link>
        </div>
      </form>
      <div className="nav-icons">
        <Link to="#" className="nav-icon">
          <FaHeart size={30} />
        </Link>
        <div className="cart-container">
          <span className="cartAmount">1</span>
          <Link to="#" className="nav-icon">
            <MdShoppingBag size={30} />
          </Link>
        </div>
        {render}
      </div>
    </nav>
  )
}

export default Navbar
