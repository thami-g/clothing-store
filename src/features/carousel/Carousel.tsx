import Header from "./Header"
import EmblaCarousel from "./EmblaCarousel"
import type { EmblaOptionsType } from "embla-carousel"

import "./sandbox.css"
import "./base.css"
import "./embla.css"

const OPTIONS: EmblaOptionsType = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function Carousel() {
  return (
    <section className="new-arrivals">
      <>
        <Header />
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </>
    </section>
  )
}

export default Carousel
