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
              Somos un equipo de psicoterapeutas comprometidos con un proceso terapéutico que
              comienza con el respeto profundo hacia la historia de cada persona. Nos dedicamos a
              ofrecer un acompañamiento cercano, discreto y humano, donde la escucha activa se
              convierte en el punto de partida para el crecimiento personal.
            </p>
            <p className="team-description">
              Creamos espacios seguros y sin juicios, donde el diálogo se construye con calidez,
              contención emocional y profesionalismo. Nuestra práctica se fundamenta en la evidencia
              científica, guiada por una vocación académica y ética que prioriza el bienestar y el desarrollo
              integral del ser humano.
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