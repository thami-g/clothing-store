import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MensPage from "./pages/MensPage"
import Navbar from "./features/navbar/Navbar"
import SignupPage from "./pages/SignupPage"
import SingleProduct from "./pages/SingleProduct"
import CartPage from "./pages/CartPage"
import AddressPage from "./pages/CheckoutPage"
import CheckoutPage from "./pages/CheckoutPage"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/men" element={<MensPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<SignupPage />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/payment" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
