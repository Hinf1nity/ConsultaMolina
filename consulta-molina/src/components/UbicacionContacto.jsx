import './UbicacionContacto.css'
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const UbicacionContacto = () => {
  return (
    <section id="ubicacion-contacto" className="section ubicacion-contacto">
      <div className="container">
        <h2 className="section-title">Ubicación y Contacto</h2>
        <div className="contacto-grid">
          <div className="contacto-image">
            <img 
              src="https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Ubicación consulta Molina" 
            />
          </div>
          <div className="contacto-info">
            <div className="info-header">
              <div className="medical-cross">
                <span>+</span>
              </div>
              <h3>Información de Contacto</h3>
            </div>
            
            <div className="contacto-details">
              <div className="contacto-item">
                <div className="contacto-icon"><FaLocationDot color='rgb(0 131 138)'/></div>
                <div className="contacto-text">
                  <strong>Dirección</strong>
                  <p>Calle Dr. Centro Médico, Piso 3, Oficina 301</p>
                </div>
              </div>
              
              <div className="contacto-item">
                <div className="contacto-icon"><FaPhoneAlt color='rgb(0 167 181)'/></div>
                <div className="contacto-text">
                  <strong>Teléfono</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contacto-item">
                <div className="contacto-icon"><FaEnvelope color='rgb(184 97 37)'/></div>
                <div className="contacto-text">
                  <strong>Email</strong>
                  <p>info@consultamolina.com</p>
                </div>
              </div>
              
              <div className="contacto-item">
                <div className="contacto-icon"><FaClock color='rgb(218 75 79)'/></div>
                <div className="contacto-text">
                  <strong>Horarios de Atención</strong>
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM<br />Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="redes-sociales">
              <h4>Redes Sociales</h4>
              <div className="social-links">
                <a href="#" className="social-link-ubicacion-contacto"><FaFacebook color='rgb(0 167 181)' size={38}/></a>
                <a href="#" className="social-link-ubicacion-contacto"><FaInstagram color='rgb(0 167 181)' size={38}/></a>
                <a href="#" className="social-link-ubicacion-contacto"><FaLinkedin color='rgb(0 167 181)' size={38}/></a>
                <a href="#" className="social-link-ubicacion-contacto"><FaWhatsapp color='rgb(0 167 181)' size={38}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UbicacionContacto