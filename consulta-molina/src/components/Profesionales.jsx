import './Profesionales.css'

const Profesionales = () => {
  const profesionales = [
    {
      name: 'Dr. Alvaro Molina',
      specialty: 'Psicóloga Clínica',
      description: 'Licenciado en Psicología, Terapeuta Familiar y Especialista en Terapias Breves, con Maestría en Psicología de la Salud. Docente e investigador en la Universidad Católica Boliviana desde 2008.',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Noel Molina',
      specialty: 'Terapeuta Familiar',
      description: 'Licenciado en Psicología, titulado por excelencia y con formación académica en México y España. Es cofundador de VITAE, proyecto orientado al desarrollo personal y profesional.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dra. Ana López',
      specialty: 'Psicóloga Infantil',
      description: 'Especializada en psicología infantil y terapia de juego.',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
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
              </div>
              <div className="profesional-info">
                <h3>{profesional.name}</h3>
                <h4>{profesional.specialty}</h4>
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