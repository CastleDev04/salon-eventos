import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar as CalendarIcon } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CalendarioDisponibilidad from '../components/CalendarioDisponibilidad'
import FormularioReserva from '../components/FormularioReserva'

function Disponibilidad() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState('')

  const handleSelectDate = (fecha) => {
    setFechaSeleccionada(fecha)
  }

  return (
    <>
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-purple-700 mb-4 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver al inicio
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <CalendarIcon className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Consultar Disponibilidad
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              Seleccioná una fecha en el calendario y completá el formulario. 
              Nos comunicaremos para confirmar la disponibilidad y coordinar los detalles.
            </p>
          </div>

          {/* Contenido principal */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Calendario */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Seleccioná una fecha
              </h2>
              <CalendarioDisponibilidad onSelectDate={handleSelectDate} />
              
              {/* Info adicional */}
              <div className="mt-8 card">
                <h3 className="font-bold text-lg mb-3">Información importante</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Los días en rojo están ocupados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Los días en verde están disponibles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    La confirmación final depende de la disponibilidad real
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Te responderemos en menos de 24 horas
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Completá tus datos
              </h2>
              <FormularioReserva fechaSeleccionada={fechaSeleccionada} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Disponibilidad