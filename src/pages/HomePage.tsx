import Hero from "../features/hero/Hero"
import Navbar from "../features/navbar/Navbar"
import NewArrivals from "../features/new-arrivals/NewArrivals"

function HomePage() {
  return (
    <main className="body">
      <Navbar />
      <Hero />
      <NewArrivals />
    </main>
  )
}

export default HomePage
