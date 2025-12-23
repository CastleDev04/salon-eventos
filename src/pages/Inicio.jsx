import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Nosotros from '../components/Nosotros'
import Galeria from '../components/Galeria'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

function Inicio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Nosotros />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  )
}

export default Inicio