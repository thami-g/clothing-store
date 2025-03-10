import SwiperSlider from "../swiper/Swiper"
// import NewProducts from "./NewProducts"
import banner from "../../assets/images/banner.jpg"
import banner2 from "../../assets/images/banner-2.jpg"
import banner3 from "../../assets/images/banner-3.jpg"
import "./new-arrivals.css"
function NewArrivals() {
  return (
    <section className="new-arrivals">
      <h2 className="title">new products</h2>
      <SwiperSlider />

      <div className="sale">
        <div className="overlay-sale"></div>
        <div className="left-section">
          <img src={banner} alt="" className="banner-img"/>
          <p className="sale-title">Find Your Perfect Fit. Shop the Best Fashion</p>
        </div>
        <div className="left-section">
          <img src={banner3} alt="" className="banner-img" />
          <p className="sale-title">Your Favorite Styles at Unbeatable Prices!</p>
        </div>
        <div className="left-section">
          <img src={banner2} alt="" className="banner-img" />
        <p className="sale-title"> Amazing Deals – Up to 30% Off!</p>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
