import { Award, Users, Heart } from 'lucide-react'

function Nosotros() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¿Quiénes Somos?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Con más de <span className="font-bold text-purple-600">15 años de experiencia</span> en la 
              organización de eventos, nos especializamos en hacer realidad tus momentos más importantes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro salón ha sido el escenario de miles de celebraciones: bodas, cumpleaños de 15, 
              eventos corporativos, y mucho más. Cada evento es único para nosotros.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Confianza, profesionalismo y atención al detalle son los pilares de nuestro servicio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-2xl transition">
              <Award className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Experiencia</h3>
                <p className="text-gray-600">Más de 1500 eventos realizados exitosamente</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-2xl transition">
              <Users className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Capacidad</h3>
                <p className="text-gray-600">Eventos desde 50 hasta 200 personas</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4 hover:shadow-2xl transition">
              <Heart className="w-10 h-10 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">Dedicación</h3>
                <p className="text-gray-600">Atención personalizada para cada cliente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros