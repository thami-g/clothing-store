import { Link } from "react-router"

function NewProduct() {
  return (
    <Link to={`/product`} className="new-product">
      <div className="new-product-head">
        <span className="new-product-banner">NEW</span>
        <img src="https://picsum.photos/200/300" alt="" />
      </div>
      <div className="new-product-body">
        <p className="new-product-body-text">
          Nkn n nsw club poly propus set - black
        </p>
        <p className="new-product-body-price">
          <span className="rand">R</span> 1500
        </p>
      </div>
    </Link>
  )
}

export default NewProduct
