import { FaHeart } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { FaSearch } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

import logo from "../../assets/images/logo.png"
import "./navbar.css"
import { Link, NavLink, useLocation } from "react-router"
import { useEffect, useState } from "react"

function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const isScrolled = scrolled ? "scrolled" : ""
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const isHomePage = `navbar ${location.pathname === "/" ? "navbar-transparent" : ""}`
  const render = false ? (
    <Link to="#" className="nav-icon">
      <CgProfile size={30} />
    </Link>
  ) : (
    <div className="login-links">
      <Link to="/login" className="login">
        Login
      </Link>
      |
      <Link to="/signup" className="login">
        Signup
      </Link>
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
    <nav className={`${isHomePage} ${isScrolled}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </Link>

      <div className="links">
        <a href="#new">New & Featured</a>
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
