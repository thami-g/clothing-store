import { Link } from "react-router"
import image from "../../assets/images/produt-details.jpg"
import "./product-details.css"
import CartSidebar from "./CartSidebar"
function ProductDetails() {
  return (
    <>
      <div className="breadcrumbs">
        <Link to="#">Back</Link> /
        <Link to="#">Home</Link> /
        <Link to="#">products</Link> 

      </div>
      <article className="product-details-section">
        <div className="product-details-container">
          <div className="product-details-img-container">
            <img src={image} alt="" className="product-details-img" />
          </div>
          <div className="product-details">
            <div className="product-details-header">
              <h2 className="product-details-title">
                Nike ACG "WOLF Tree Polartec
              </h2>
              <p className="product-details-price">R1,2000</p>
            </div>
            <div className="product-details-sizes">
              <p className="product-details-size-title">Select Size</p>
              <div className="product-details-size">
                <button className="size">S</button>
                <button className="size">M</button>
                <button className="size">L</button>
                <button className="size">XL</button>
                <button className="size">XXL</button>
                <button className="size">3XL</button>
              </div>
            </div>
            <div className="product-details-quantity-container">
              <p className="product-details-size-title">Quantity</p>
              <div className="product-details-quantity">
                <button className="product-details-quantity-button">-</button>
                <p className="product-details-quantity-amount">01</p>
                <button className="product-details-quantity-button">+</button>
              </div>
            </div>
            <div className="product-details-buttons">
              <button className="product-details-button">Add to cart</button>
              <button className="product-details-button product-details-bg-black">
                Buy it now
              </button>
            </div>
            <div className="product-details-description">
              <h2 className="product-details-description-title">Description</h2>
              <p className="product-details-description-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
                consectetur reiciendis obcaecati harum. Odio ut dignissimos
                earum. Sed, vero eveniet! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Culpa laudantium doloribus quasi
                commodi quia asperiores exercitationem dolore hic ducimus
                itaque! Sed, vero eveniet! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Culpa laudantium doloribus quasi
                commodi quia asperiores exercitationem dolore hic ducimus
                itaque!
              </p>
            </div>
          </div>
        </div>
      </article>
      <CartSidebar />
    </>
  )
}

export default ProductDetails
