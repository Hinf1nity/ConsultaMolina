import './Valores.css'
import { FaHandshake, FaMicroscope } from "react-icons/fa6";
import { FaUserShield, FaSun, FaHeartbeat, FaLock } from "react-icons/fa";
const Valores = () => {
  const valores = [
    {
      icon: <FaHandshake color='white' />,
      title: 'Respeto',
      description: 'Valoramos la dignidad y singularidad de cada persona',
      color: 'rgb(0 131 138)'
    },
    {
      icon: <FaUserShield color='white' />,
      title: 'Confidencialidad',
      description: 'Garantizamos la privacidad y seguridad de la información',
      color: 'rgb(0 167 181)'
    },
    {
      icon: <FaSun color='white' />,
      title: 'Calidez',
      description: 'Brindamos un ambiente cálido y acogedor',
      color: 'rgb(184 97 37)'
    },
    {
      icon: <FaHeartbeat color='white' />,
      title: 'Humildad Profesional',
      description: 'Mantenemos una actitud humilde y cercana',
      color: 'rgb(218 75 79)'
    },
    {
      icon: <FaMicroscope color='white' />,
      title: 'Rigor Científico',
      description: 'Aplicamos métodos basados en evidencia científica',
      color: 'rgb(0 131 138)'
    },
    {
      icon: <FaLock color='white' />,
      title: 'Orientación',
      description: 'Mantenemos total discreción en nuestros servicios',
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