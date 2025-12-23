import { Facebook, Instagram, Calendar } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">Salón Eventos</span>
            </div>
            <p className="text-gray-400">
              Tu espacio ideal para eventos inolvidables. Más de 15 años haciendo realidad tus celebraciones.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-gray-400 hover:text-purple-400 transition">Servicios</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-purple-400 transition">Nosotros</a></li>
              <li><a href="#galeria" className="text-gray-400 hover:text-purple-400 transition">Galería</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-purple-400 transition">Contacto</a></li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-bold mb-4">Seguinos</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Salón Eventos. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">Sistema de Reservas Online</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer