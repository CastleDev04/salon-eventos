import { Home, Sparkles, Music, Utensils } from 'lucide-react'

function Servicios() {
  const servicios = [
    {
      icon: <Home className="w-12 h-12 text-purple-600" />,
      titulo: "Alquiler del Salón",
      descripcion: "Espacio amplio y climatizado con capacidad para hasta 200 personas"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-purple-600" />,
      titulo: "Decoración Personalizada",
      descripcion: "Servicio opcional de decoración adaptado al estilo de tu evento"
    },
    {
      icon: <Music className="w-12 h-12 text-purple-600" />,
      titulo: "Sonido e Iluminación",
      descripcion: "Equipamiento profesional para garantizar la mejor experiencia"
    },
    {
      icon: <Utensils className="w-12 h-12 text-purple-600" />,
      titulo: "Catering Opcional",
      descripcion: "Servicio de catering de alta calidad con menús personalizados"
    }
  ]

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 text-lg">Todo lo que necesitás para tu evento perfecto</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center border-2 border-transparent hover:border-purple-600">
              <div className="flex justify-center mb-4">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios