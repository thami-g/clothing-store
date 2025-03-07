import NewProduct from "./NewProduct"

function NewProducts() {
  const products = [1, 2, 3, 4]
  const renderProducts = products.map((_, index) => (
    <NewProduct key={index} />
  ))

  return <section className="new-products">{renderProducts}</section>
}

export default NewProducts
