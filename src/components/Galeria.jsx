function Galeria() {
  const imagenes = [
    {
      url: "https://images.unsplash.com/photo-1519167758481-83f29da8962d?w=800",
      alt: "Salón principal decorado"
    },
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      alt: "Mesa decorada para evento"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      alt: "Evento nocturno con iluminación"
    },
    {
      url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
      alt: "Decoración elegante"
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
      alt: "Fiesta celebración"
    },
    {
      url: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800",
      alt: "Salón vista general"
    }
  ]

  return (
    <section id="galeria" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Galería</h2>
          <p className="text-gray-600 text-lg">Conocé nuestras instalaciones</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagenes.map((img, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-64"
            >
              <img 
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria