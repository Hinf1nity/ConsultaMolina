import Hero from '../components/Hero'
import QuienesSomos from '../components/QuienesSomos'
import MisionVision from '../components/MisionVision'
import Valores from '../components/Valores'
import ServiciosPreview from '../components/ServiciosPreview'
import Profesionales from '../components/Profesionales'
import UbicacionContacto from '../components/UbicacionContacto'

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <QuienesSomos />
      {/* <MisionVision /> */}
      <Valores />
      <ServiciosPreview />
      <Profesionales />
      <UbicacionContacto />
    </div>
  )
}

export default HomePage