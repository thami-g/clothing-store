import { FaHeart } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import logo from "../../assets/images/logo.png";
import "./navbar.css";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to='/home' className="logo">
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
            <FaSearch  />
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
            <MdShoppingBag  size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
