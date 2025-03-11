import SectionNavigation from "../section-navigation/SectionNavigation"
import "./menu.css"
import image from  '../../assets/images/menu-pic.png'
import image2 from  '../../assets/images/menu-pic-2.jpg'
function Menu() {
  return (
    <section className="mens-section-container">
    <div className="content-conainer">
      <SectionNavigation />
      <div className="men-section-menu">
        <div className="men-section-menu-casual">
          <img src={image} alt="" className="section-menu-image" />
          <button className="men-section-btn">Casual</button>
        </div>
        <div className="men-section-menu-formal">
          <img src={image2} alt="" className="section-menu-image-formal" />
          <button className="men-section-btn">Formal</button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Menu
