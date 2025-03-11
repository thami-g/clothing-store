import { Link } from "react-router"
import "./address-form.css"
import logo from "../../../assets/images/logo.png"

function AddressForm() {
  return (
    <section className="details">
      <form className="address-form">
        <Link to="/" className="logo-container">
          <img src={logo} alt="logo" className="logo-img-signup" />
        </Link>
        <div className="address-control">
          <div className="address-alignment">
            <label htmlFor="firstName" className="address-label">First name</label>
            <input
              type="text"
              name="name"
              id="firstName"
              className="address-input"
            />
          </div>
          <div className="address-alignment address-spacing">
            <label htmlFor="lastName" className="address-label">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="address-input"
            />
          </div>
        </div>
        <div className="address-control address-margin">
          <div className="address-alignment">
            <label htmlFor="firstName" className="address-label">Street address</label>
            <input
              type="text"
              name="name"
              id="firstName"
              className="address-input address-width"
            />
          </div>
        </div>
        <div className="address-control address-control-city">
          <div className="address-alignment address-grow">
            <label htmlFor="city" className="address-label">City</label>
            <input type="text" name="city" id="city" className="address-input" />
          </div>
          <div className="address-alignment">
            <label htmlFor="state" className="address-label">State</label>
            <input
              type="text"
              name="state"
              id="state"
              className="address-input address-info"
            />
          </div>
          <div className="address-alignment">
            <label htmlFor="postCode"  className="address-label" >Postcode</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="address-input address-info" 
            />
          </div>
        </div>
        <div className="address-control address-control-city">
          <div className="address-alignment">
            <label htmlFor="card" className="address-label">Card number</label>
            <input type="text" name="card" id="card" className="address-input" />
          </div>
          <div className="address-alignment">
            <label htmlFor="state" className="address-label">Cvc</label>
            <input
              type="text"
              name="state"
              id="state"
              className="address-input address-info"
            />
          </div>
          <div className="address-alignment">
            <label htmlFor="postCode"  className="address-label" >Expiry</label>
            <input
              type="text"
              name="postcode"
              id="postcode"
              className="address-input address-info" 
            />
          </div>
        </div>
        <Link to="/payment" className="address-button">
         Continue to payment
        </Link>
      </form>
    </section>
  )
}

export default AddressForm
