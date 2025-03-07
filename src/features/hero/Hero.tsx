import HeroVideo from '../../assets/videos/hero-video_2.mp4'
import './hero.css'

function Hero() {
  return (
    <section className='hero-section'>
      <video autoPlay loop muted>
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="center">
        <p className="text">
          Find the past, wear the future. Fashion that lasts longer than trends.
        </p>
        <a className="shop" href="#products">Shop Now</a>
      </div>
    </section>
  );
}

export default Hero;
