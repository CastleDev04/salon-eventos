import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

function FormularioReserva({ fechaSeleccionada }) {
  const [enviado, setEnviado] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: fechaSeleccionada || '',
    horario: '',
    tipoEvento: '',
    comentario: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log('Solicitud enviada:', formData)
    
    setEnviado(true)
    
    setTimeout(() => {
      setEnviado(false)
      setFormData({
        nombre: '',
        telefono: '',
        fecha: '',
        horario: '',
        tipoEvento: '',
        comentario: ''
      })
    }, 3000)
  }

  if (enviado) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto text-center">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud Enviada!</h3>
        <p className="text-gray-600">
          Nos comunicaremos a la brevedad para confirmar disponibilidad y detalles.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Reserva</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Nombre */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            placeholder="Juan Pérez"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Teléfono / WhatsApp *
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
            placeholder="+595 981 234 567"
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Fecha del evento *
          </label>
          <input
            type="date"
            name="fecha"
            value={fechaSeleccionada || formData.fecha}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          />
        </div>

        {/* Horario */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Horario aproximado *
          </label>
          <select
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          >
            <option value="">Seleccionar horario</option>
            <option value="mañana">Mañana (9:00 - 13:00)</option>
            <option value="tarde">Tarde (14:00 - 18:00)</option>
            <option value="noche">Noche (19:00 - 23:00)</option>
            <option value="todo-dia">Todo el día</option>
          </select>
        </div>

        {/* Tipo de evento */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Tipo de evento *
          </label>
          <select
            name="tipoEvento"
            value={formData.tipoEvento}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          >
            <option value="">Seleccionar tipo</option>
            <option value="boda">Boda</option>
            <option value="cumpleanos-15">Cumpleaños de 15</option>
            <option value="cumpleanos">Cumpleaños</option>
            <option value="corporativo">Evento corporativo</option>
            <option value="aniversario">Aniversario</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        {/* Comentario */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Comentario adicional (opcional)
          </label>
          <textarea
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition resize-none"
            placeholder="Detalles adicionales sobre tu evento..."
          ></textarea>
        </div>

        {/* Aviso */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-sm text-yellow-800">
            <strong>Importante:</strong> Esta solicitud no confirma la reserva. 
            El salón se comunicará contigo para confirmar disponibilidad, precios y forma de pago.
          </p>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Enviar Solicitud
        </button>
      </form>
    </div>
  )
}

export default FormularioReserva