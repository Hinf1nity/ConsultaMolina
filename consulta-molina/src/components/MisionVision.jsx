import './MisionVision.css'
import { FaBullseye } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const MisionVision = () => {
  return (
    <section id="mision-vision" className="section mision-vision">
      <div className="container">
        <h2 className="section-title">Misión y Visión</h2>
        <div className="mision-vision-grid">
          <div className="card mision-card">
            <div className="card-icon">
              <div className="icon-circle">
                <span><FaBullseye color='white' /></span>
              </div>
            </div>
            <h3>Misión</h3>
            <p>
              Proporcionar servicios de psicoterapia y consulta familiar de alta calidad, promoviendo el bienestar emocional y mental de nuestros pacientes a través de un enfoque integral, profesional y humanizado.
            </p>
          </div>
          <div className="card vision-card">
            <div className="card-icon">
              <div className="icon-circle">
                <span><FaEye color='white' /></span>
              </div>
            </div>
            <h3>Visión</h3>
            <p>
              Ser reconocidos como un centro de referencia en salud mental, contribuyendo al desarrollo de familias y comunidades más saludables y resilientes a través de nuestros servicios especializados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MisionVision