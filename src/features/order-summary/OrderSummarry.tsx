import { Link } from "react-router"
import "./order-summary.css"

function OrderSummarry() {
  return (
    <div className="order-summary">
      <h2 className="order-summary-title">Order Summary</h2>
      <div>
        <h3 className="order-summary-code">CODE</h3>
        <form className="order-summary-form">
          <div className="order-summary-control">
            <input type="text" className="order-summary-input" placeholder="DISCOUNT CODE" />
            <button className="order-summary-btn">Apply</button>
          </div>
        </form>
      </div>
      <div className="order-summary-totals">
        <div className="order-summary-total">
          <p>Subtotal</p>
          <p className="order-summary-total-price">R1,200</p>
        </div>
        <div className="order-summary-total">
          <p>Delivery Fee</p>
          <p className="order-summary-total-price">R1,200</p>
        </div>
      </div>
      <div className="order-summary-total order-summary-m">
        <p>Total</p>
        <p className="order-summary-total-price">R1,200</p>
      </div>
      <Link to="checkout" className="order-summary-checkout">
        Checkout
      </Link>
    </div>
  )
}

export default OrderSummarry
