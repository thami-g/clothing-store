import { Link } from "react-router"
import { MdShoppingBag } from "react-icons/md"

import image from "../../assets/images/cart-pic.jpg"
import "./cart-sidebar.css"

function CartSidebar() {
  return (
    <div className="cart-preview">
      <div className="cart-preview-container">
        <div className="cart-preview-img-container">
          <img src={image} alt="" className="cart-preview-img" />
        </div>
        <div className="cart-preview-description">
          <p>
          <span className="cart-preview-title">Nike ACG "WOLF Tree Polartec</span>
            <span className="cart-preview-price">R1,200</span>
            <span className="cart-preview-size">Size: M</span>
            <div className="cart-preview-buttons">
              <button className="cart-preview-button">+</button>
              <p>01</p>
              <button className="cart-preview-button">-</button>
              <Link to="#">
                <MdShoppingBag className="cart-preview-icon" />
              </Link>
            </div>
          </p>
        </div>
      </div>
      <div>
        <div className="cart-preview-total">
        <p className="cart-preview-total-text">Total</p>
        <p className="cart-preview-price">R1,200</p>
        </div>
        <p className="cart-preview-text">Total not includding delivery fee</p>
      <Link to="#" className="cart-preview-button-link">View cart</Link>
      </div>
    </div>
  )
}

export default CartSidebar
