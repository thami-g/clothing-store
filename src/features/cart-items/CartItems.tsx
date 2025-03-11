import { RiDeleteBin7Line } from "react-icons/ri"
import image from "../../assets/images/cart-pic.jpg"

import "./cart-item.css"
function CartItems() {
  return (
    <article>
      <div className="cart-item">
        <div className="cart-item-container">
          <div className="cart-item-img-container">
            <img src={image} alt="" className="cart-item-img" />
          </div>
          <div className="cart-item-product">
            <h3 className="cart-item-product-text">NIKE AGOWA 'Wolf Tree</h3>
            <p className="cart-item-product-size">Size: M</p>
          </div>
        </div>
        <div className="cart-item-quantity-section">
        <div className="cart-item-quantity-container">
          <div className="cart-item-quantity">
            <button className="cart-item-quantity-btn">-</button>
            <p className="cart-item-quantity-amount">01</p>
            <button className="cart-item-quantity-btn">+</button>
          </div>
          <RiDeleteBin7Line className="cart-item-delete" />
        </div>
        </div>

        <div className="cart-item-total">
          <p className="cart-item-price">R1,200</p>
        </div>
      </div>
    </article>
  )
}

export default CartItems
