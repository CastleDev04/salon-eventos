import { Link } from 'react-router-dom'
import { Calendar, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Calendar className="w-8 h-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">Salón Eventos</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-purple-600 font-medium transition">Servicios</a>
            <a href="#nosotros" className="text-gray-700 hover:text-purple-600 font-medium transition">Nosotros</a>
            <a href="#galeria" className="text-gray-700 hover:text-purple-600 font-medium transition">Galería</a>
            <a href="#contacto" className="text-gray-700 hover:text-purple-600 font-medium transition">Contacto</a>
            <Link to="/disponibilidad" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105">
              Consultar Disponibilidad
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#servicios" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Servicios</a>
            <a href="#nosotros" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Nosotros</a>
            <a href="#galeria" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Galería</a>
            <a href="#contacto" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">Contacto</a>
            <Link to="/disponibilidad" className="block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg text-center mt-4 transition">
              Consultar Disponibilidad
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar