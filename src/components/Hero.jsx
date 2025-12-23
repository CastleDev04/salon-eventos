import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 to-blue-600 text-white pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Salón de Eventos Premium
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
          Reservá tu evento sin complicaciones. El espacio perfecto para tus momentos especiales.
        </p>
        <Link 
          to="/disponibilidad" 
          className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition shadow-2xl hover:shadow-xl transform hover:scale-105"
        >
          Consultar Disponibilidad
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}

export default Hero