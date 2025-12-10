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
              Brindamos servicios de psicoterapia y consulta familiar de alta calidad, promoviendo el
              bienestar emocional y relacional de las personas, parejas y familias a través de un enfoque
              integral, profesional y humanizado. Nuestra labor se sustenta en el valor del vínculo
              terapéutico, la evidencia científica y una vocación ética y empática que favorece el
              crecimiento personal y el desarrollo integral.
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
              Ser un referente en atención psicoterapéutica, reconocido por un abordaje humano, ético y
              científicamente fundamentado. Aspiramos a fortalecer el bienestar emocional de las
              personas a través de la construcción de vínculos saludables, contribuyendo a mejorar la
              calidad de vida de quienes confían en nosotros dentro de un espacio discreto, cálido y
              transformador.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MisionVision