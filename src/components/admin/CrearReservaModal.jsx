import { useState } from 'react'
import { X, Save } from 'lucide-react'

function CrearReservaModal({ solicitud, onClose, onGuardar }) {
  const [formData, setFormData] = useState({
    cliente: solicitud?.nombre || '',
    telefono: solicitud?.telefono || '',
    fecha: solicitud?.fecha || '',
    horario: solicitud?.horario || '',
    tipoEvento: solicitud?.tipoEvento || '',
    montoTotal: '',
    observacion: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onGuardar({
      ...formData,
      solicitudId: solicitud?.id,
      estado: 'confirmada',
      fechaCreacion: new Date().toISOString()
    })
  }

  if (!solicitud) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-t-xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">Crear Nueva Reserva</h2>
          <button
            onClick={onClose}
            className="hover:bg-green-700 p-2 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Cliente *</label>
            <input
              type="text"
              name="cliente"
              value={formData.cliente}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Nombre del cliente"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Teléfono *</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="+595 981 234 567"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Fecha del evento *</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Horario *</label>
            <select
              name="horario"
              value={formData.horario}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Seleccionar horario</option>
              <option value="mañana">Mañana (9:00 - 13:00)</option>
              <option value="tarde">Tarde (14:00 - 18:00)</option>
              <option value="noche">Noche (19:00 - 23:00)</option>
              <option value="todo-dia">Todo el día</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Tipo de evento *</label>
            <select
              name="tipoEvento"
              value={formData.tipoEvento}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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

          <div>
            <label className="block text-gray-700 font-medium mb-2">Monto Total del Evento *</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                Gs.
              </span>
              <input
                type="number"
                name="montoTotal"
                value={formData.montoTotal}
                onChange={handleChange}
                required
                min="0"
                step="1000"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="1000000"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Observación (opcional)</label>
            <textarea
              name="observacion"
              value={formData.observacion}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              placeholder="Detalles adicionales de la reserva..."
            ></textarea>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-sm text-green-800">
              <strong>✓</strong> Al crear la reserva, la solicitud se marcará como "Aceptada" 
              y se bloqueará la fecha en el calendario.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Crear Reserva
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-medium transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CrearReservaModal