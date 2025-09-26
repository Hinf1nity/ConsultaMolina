import { Link } from 'react-router-dom'
import './ServiciosPreview.css'

const ServiciosPreview = () => {
  const servicios = [
    {
      title: 'Psicoterapia',
      description: 'Atención personalizada para abordar tus necesidades específicas en un ambiente seguro y confidencial.',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Psicoterapia en Línea',
      description: 'Sesiones de psicoterapia virtuales desde la comodidad de tu hogar con la misma calidad profesional.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Terapia Familiar',
      description: 'Fortalecimiento de vínculos familiares y resolución de conflictos con un enfoque colaborativo.',
      image: 'https://images.pexels.com/photos/4545962/pexels-photo-4545962.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Neuropsicología Deportiva',
      description: 'Optimización del rendimiento mental de atletas y deportistas para alcanzar su máximo potencial.',
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Vitae Orientación Vocacional',
      description: 'Acompañamiento integral en la toma de decisiones vocacionales y profesionales.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Charlas y Talleres',
      description: 'Programas educativos para instituciones, empresas y comunidades sobre salud mental.',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Juventud en la Diversidad',
      description: 'Apoyo especializado para jóvenes LGBTIQ+ y sus familias en procesos de identidad.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      link: '/servicios'
    },
    {
      title: 'Duelo',
      description: 'Acompañamiento especializado en procesos de duelo y pérdida con apoyo emocional integral.',
      image: 'https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
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