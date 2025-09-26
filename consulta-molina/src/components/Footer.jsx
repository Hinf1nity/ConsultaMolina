import { Link } from 'react-router-dom'
import './Footer.css'
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import IsoLogo from '../assets/Molina_Isologo-transparente-2.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            {/* <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-icon">M</span>
              </div>
              <span className="brand-name">Molina</span>
            </div> */}
            <div className="footer-logo">
              <img src={IsoLogo} alt="Molina" className="footer-logo-image" />
            </div>
            <p className="footer-description">
              Consulta Psicoterapéutica especializada en bienestar mental y familiar.
            </p>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p><FaPhoneAlt color='rgb(0 167 181)'/> +1 (555) 123-4567</p>
            <p><FaEnvelope color='rgb(0 167 181)'/> info@consultamolina.com</p>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebook color='rgb(0 167 181)' size={30}/></a>
              <a href="#" className="social-link"><FaInstagram color='rgb(0 167 181)' size={30}/></a>
              <a href="#" className="social-link"><FaLinkedin color='rgb(0 167 181)' size={30}/></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Molina - Consulta Psicoterapéutica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer