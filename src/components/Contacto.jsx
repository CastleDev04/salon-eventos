import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

function Contacto() {
  return (
    <section id="contacto" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="section-title">Contacto</h2>
          <p className="text-gray-500 text-lg">Estamos para ayudarte</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ 
            { icon: Phone, title: "Teléfono", value: "+595 981 234 567", link: "tel:+595981234567" },
            { icon: MessageCircle, title: "WhatsApp", value: "Enviar mensaje", link: "https://wa.me/595981234567" },
            { icon: Mail, title: "Email", value: "info@saloneventos.com", link: "mailto:info@saloneventos.com" },
            { icon: MapPin, title: "Dirección", value: "Av. Principal 1234\nAsunción" }
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-lg transition">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-primary/10 mb-5">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-gray-600 hover:text-primary transition whitespace-pre-line">
                  {item.value}
                </a>
              ) : (
                <p className="text-gray-600 whitespace-pre-line">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Contacto