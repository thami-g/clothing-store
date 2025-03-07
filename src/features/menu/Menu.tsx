import "./menu.css"
function Menu() {
  return (
    <div className="men-section-menu">
      <div className="men-section-menu-casual">
        {/* <img src="https://picsum.photos/200/300" alt="" /> */}
        <button className="men-section-btn">Casual</button>
      </div>
      <div  className="men-section-menu-formal">
        {/* <img src="https://picsum.photos/200/300" alt="" /> */}
        <button className="men-section-btn">Formal</button>
      </div>
    </div>
  )
}

export default Menu
