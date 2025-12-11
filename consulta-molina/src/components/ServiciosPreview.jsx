import { Link } from 'react-router-dom'
import './ServiciosPreview.css'
import PsicoterapiaImg from '../imgs/psicoterapia.png'
import PsicoterapiaLineaImg from '../imgs/psicoterapia_linea.jpg'
import TerapiaFamiliarImg from '../imgs/psicoterapia_familiar.png'
import NeuropsicologiaDeportivaImg from '../imgs/neuropsicologia_deportiva.png'
import OrientacionVocacionalImg from '../imgs/orientacion_vocacional.png'
import JuventudDiversidadImg from '../imgs/juventud_diversidad.png'
import DueloImg from '../imgs/duelo.png'
import CharlasTalleresImg from '../imgs/charlas_talleres.jpg'

const ServiciosPreview = () => {
  const servicios = [
    {
      title: 'Psicoterapia',
      description: 'Atención personalizada para abordar tus necesidades específicas en un ambiente seguro y confidencial.',
      image: PsicoterapiaImg,
      link: '/servicios'
    },
    {
      title: 'Psicoterapia en Línea',
      description: 'Sesiones de psicoterapia virtuales desde la comodidad de tu hogar con la misma calidad profesional.',
      image: PsicoterapiaLineaImg,
      link: '/servicios'
    },
    {
      title: 'Terapia Familiar',
      description: 'Fortalecimiento de vínculos familiares y resolución de conflictos con un enfoque colaborativo.',
      image: TerapiaFamiliarImg,
      link: '/servicios'
    },
    {
      title: 'Neuropsicología Deportiva',
      description: 'Optimización del rendimiento mental de atletas y deportistas para alcanzar su máximo potencial.',
      image: NeuropsicologiaDeportivaImg,
      link: '/servicios'
    },
    {
      title: 'Vitae Orientación Vocacional',
      description: 'Acompañamiento integral en la toma de decisiones vocacionales y de plan de vida.',
      image: OrientacionVocacionalImg,
      link: '/servicios'
    },
    {
      title: 'Charlas y Talleres',
      description: 'Conferencia psicoeducativas dirigidas a colegios, empresas, instituciones y comunidades.',
      image: CharlasTalleresImg,
      link: '/servicios'
    },
    {
      title: 'Juventud en la Diversidad',
      description: 'Apoyo especializado para jovenes con condiciones del neurodesarrollo como el trastorno del espectro autista o el síndrome de Down.',
      image: JuventudDiversidadImg,
      link: '/servicios'
    },
    {
      title: 'Duelo',
      description: 'Acompañamiento especializado en procesos de duelo y pérdida con apoyo emocional integral.',
      image: DueloImg,
      link: '/servicios'
    }
  ]

  return (
    <section className="section servicios-preview">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div key={index} className="servicio-card">
              <div className="servicio-image">
                <img src={servicio.image} alt={servicio.title} />
              </div>
              <div className="servicio-content">
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <Link to={servicio.link} className="btn btn-outline">
                  Más información
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiciosPreview