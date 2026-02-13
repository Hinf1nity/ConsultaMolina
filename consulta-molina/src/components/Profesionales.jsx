import './Profesionales.css'
import alvaroImage from '../imgs/alvaro.jpg'
import noelImage from '../imgs/noel.jpg'
import valeriaImage from '../imgs/valeria.jpg'

const Profesionales = () => {
  const profesionales = [
    {
      name: 'Alvaro Molina',
      description: 'Psicólogo, Terapeuta Familiar y Especialista en Terapias Breves, con Maestría en Psicología de la Salud. Docente e investigador en la Universidad Católica Boliviana desde 2008.',
      image: alvaroImage,
      phone: '+591 72533356',
    },
    {
      name: 'Noel Molina',
      description: 'Psicólogo, titulado por excelencia con formación académica en México y España. Actualmente ejerciendo en psicología clínica, orientación vocacional y neuropsicología deportiva.',
      image: noelImage,
      phone: '+591 72564060',
    },
    {
      name: 'Valeria Del Villar',
      description: 'Psicóloga graduada por excelencia con estudios internacionales en México y en España. Especialista en clínica infanto-juvenil, clínica familiar, neurodesarrollo y orientación vocacional.',
      image: valeriaImage,
      phone: '+591 67025984',
    }
  ]

  return (
    <section id="profesionales" className="section profesionales">
      <div className="container">
        <h2 className="section-title">Nuestros Profesionales</h2>
        <div className="profesionales-grid">
          {profesionales.map((profesional, index) => (
            <div key={index} className="profesional-card">
              <div className="profesional-image">
                <img src={profesional.image} alt={profesional.name} />
                <div className="profesional-overlay">
                  <span className="phone-number">{profesional.phone}</span>
                </div>
              </div>
              <div className="profesional-info">
                <h3>{profesional.name}</h3>
                <p>{profesional.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Profesionales