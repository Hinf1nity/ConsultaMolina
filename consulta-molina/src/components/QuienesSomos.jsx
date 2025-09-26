import './QuienesSomos.css'
import { FaHeart } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="section quienes-somos">
      <div className="container">
        <h2 className="section-title">Quiénes Somos</h2>
        <div className="quienes-content">
          <div className="team-image">
            <img 
              src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Equipo de profesionales" 
            />
          </div>
          <div className="team-info">
            <p className="team-description">
              Somos un equipo de profesionales especializados en psicoterapia y consulta familiar, comprometidos con brindar atención de calidad y apoyo integral a nuestros pacientes.
            </p>
            <p className="team-description">
              Con años de experiencia en el campo de la salud mental, trabajamos con dedicación para ofrecer un espacio seguro y profesional donde cada persona pueda encontrar el apoyo que necesita.
            </p>
            <div className="team-features">
              <div className="feature-item">
                <div className="feature-icon"><FaHeart color='rgb(184 97 37)' /></div>
                <span>Atención personalizada</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><FaShieldAlt color='rgb(0 131 138)' /></div>
                <span>Confidencialidad garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos