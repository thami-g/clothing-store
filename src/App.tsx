import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MensPage from "./pages/MensPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/men" element={<MensPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
