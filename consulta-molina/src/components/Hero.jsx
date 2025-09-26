import { Link } from 'react-router-dom'
import './Hero.css'
import MolinaIsologo from '../assets/Molina_Isologo-positivo.png'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo">
            {/* <div className="logo-circle-large">
              <div className="logo-inner">
                <span className="logo-m">M</span>
              </div>
            </div> */}
            <img src={MolinaIsologo} alt="Molina Isologo" className="logo-image" />
          </div>
          <p className="hero-description">
            Brindamos servicios especializados en psicoterapia y consulta familiar con un 
            enfoque profesional y humano para tu bienestar integral.
          </p>
          <Link to="/servicios" className="btn hero-btn">Conoce Más</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero