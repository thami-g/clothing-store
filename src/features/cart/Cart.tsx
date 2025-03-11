import { Link } from "react-router"
import CartItems from "../cart-items/CartItems"
import OrderSummarry from "../order-summary/OrderSummarry"
import "./cart.css"
// change class names to cart intead of cart-item
function Cart() {
  return (
    <section className="cart-container">
      <div className="cart-section">
      <div className="cart">
        <h2 className="cart-title">Your Cart</h2>
        <div className="cart-titles">
          <h3 className="cart-item-title">Products</h3>
          <h3 className="cart-item-title cart-item-title-ml">Quantity</h3>
          <h3 className="cart-item-title">TOTAL</h3>
        </div>
        <CartItems />
        <CartItems />
        <Link to="products" className="cart-link">Continue shopping</Link>
      </div>
      <OrderSummarry />
      </div>
    </section>
  )
}

export default Cart
