import { useState } from 'react'
import './QuienesSomos.css'
import { FaHeart, FaBullseye, FaEye } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import quienes_somos2 from '../imgs/quienes_somos2.jpg'

const QuienesSomos = () => {
  const [activeTab, setActiveTab] = useState(null)
  
  const content = {
    mision: "Brindamos servicios de psicoterapia y consulta familiar de alta calidad, promoviendo el bienestar emocional y relacional de las personas, parejas y familias a través de un enfoque integral, profesional y humanizado. Nuestra labor se sustenta en el valor del vínculo terapéutico, la evidencia científica y una vocación ética y empática que favorece el crecimiento personal y el desarrollo integral.",
    vision: "Ser un referente en atención psicoterapéutica, reconocido por un abordaje humano, ético y científicamente fundamentado. Aspiramos a fortalecer el bienestar emocional de las personas a través de la construcción de vínculos saludables, contribuyendo a mejorar la calidad de vida de quienes confían en nosotros dentro de un espacio discreto, cálido y transformador."
  }
  return (
    <section id="quienes-somos" className="section quienes-somos">
      <div className="container">
        <h2 className="section-title">Quiénes Somos</h2>
        <div className="quienes-content">
          <div className="team-image">
            <img 
              src={quienes_somos2}
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
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeTab === 'mision' ? 'active' : ''}`}
                onClick={() => setActiveTab(activeTab === 'mision' ? null : 'mision')}
              >
                <FaBullseye /> Misión
              </button>
              <button 
                className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`}
                onClick={() => setActiveTab(activeTab === 'vision' ? null : 'vision')}
              >
                <FaEye /> Visión
              </button>
            </div>

            {/* --- DESPLIEGUE DE CONTENIDO --- */}
            {activeTab && (
              <div className="tab-content">
                <p>{content[activeTab]}</p>
              </div>
            )}
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