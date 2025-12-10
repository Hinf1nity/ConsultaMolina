import './Valores.css'
import { FaHandshake, FaMicroscope, FaChildren } from "react-icons/fa6";
import { FaUserShield, FaSun, FaLock } from "react-icons/fa";
const Valores = () => {
  const valores = [
    {
      icon: <FaHandshake color='white' />,
      title: 'Respeto',
      description: 'Nos relacionamos desde la\
                    horizontalidad, reconociendo la\
                    singularidad de cada historia sin\
                    imponer juicios ni interpretaciones\
                    innecesarias.',
      color: 'rgb(0 131 138)'
    },
    {
      icon: <FaUserShield color='white' />,
      title: 'Confidencialidad',
      description: 'La confianza depositada en nosotros se resguarda con discreción ética y técnica.',
      color: 'rgb(0 167 181)'
    },
    {
      icon: <FaSun color='white' />,
      title: 'Calidez',
      description: 'Fomentamos un ambiente de acogida emocional, donde cada persona se siente segura, escuchada y valorada.',
      color: 'rgb(184 97 37)'
    },
    {
      icon: <FaChildren color='white' />,
      title: 'Humildad Profesional',
      description: 'La formación académica y el\
                    conocimiento técnico son\
                    fundamentales, pero sabemos que sin\
                    empatía, escucha activa y presencia\
                    humana, no hay verdadero\
                    acompañamiento.',
      color: 'rgb(218 75 79)'
    },
    {
      icon: <FaMicroscope color='white' />,
      title: 'Rigor Científico',
      description: 'Sostenemos nuestra práctica en\
                    evidencia empírica, con énfasis en el\
                    análisis de la conducta y el estudio\
                    objetivo de las relaciones humanas.',
      color: 'rgb(0 131 138)'
    },
    {
      icon: <FaLock color='white' />,
      title: 'Discreción',
      description: 'Elegimos un perfil bajo, profesional y\
                    sobrio. No buscamos exposición, sino\
                    resultados genuinos.',
      color: 'rgb(0 167 181)'
    }
  ]

  return (
    <section id="valores" className="section valores">
      <div className="container">
        <h2 className="section-title">Nuestros Valores</h2>
        <div className="valores-grid">
          {valores.map((valor, index) => (
            <div key={index} className="valor-card">
              <div className="valor-icon" style={{ backgroundColor: valor.color }}>
                <span>{valor.icon}</span>
              </div>
              <h3>{valor.title}</h3>
              <p>{valor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Valores