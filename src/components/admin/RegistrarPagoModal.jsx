import { useState } from 'react'
import { X, DollarSign } from 'lucide-react'

function RegistrarPagoModal({ reserva, onClose, onGuardar }) {
  const [formData, setFormData] = useState({
    monto: '',
    tipoPago: 'seña',
    metodo: 'efectivo',
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
    
    const pago = {
      ...formData,
      monto: parseFloat(formData.monto),
      fecha: new Date().toISOString().split('T')[0],
      reservaId: reserva.id
    }
    
    onGuardar(pago)
  }

  if (!reserva) return null

  const saldoPendiente = reserva.montoTotal - (reserva.totalPagado || 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
        
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <DollarSign className="w-7 h-7" />
            <h2 className="text-2xl font-bold">Registrar Pago</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-green-700 p-2 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Info de la reserva */}
        <div className="bg-blue-50 p-4 border-b">
          <p className="text-sm text-gray-600 mb-1">Cliente: <strong>{reserva.cliente}</strong></p>
          <p className="text-sm text-gray-600 mb-1">
            Monto Total: <strong>Gs. {reserva.montoTotal.toLocaleString()}</strong>
          </p>
          <p className="text-sm text-gray-600 mb-1">
            Total Pagado: <strong>Gs. {(reserva.totalPagado || 0).toLocaleString()}</strong>
          </p>
          <p className="text-sm font-bold text-red-600">
            Saldo Pendiente: Gs. {saldoPendiente.toLocaleString()}
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Monto a Pagar *</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                Gs.
              </span>
              <input
                type="number"
                name="monto"
                value={formData.monto}
                onChange={handleChange}
                required
                min="1"
                max={saldoPendiente}
                step="1000"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="300000"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Máximo: Gs. {saldoPendiente.toLocaleString()}
            </p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Tipo de Pago *</label>
            <select
              name="tipoPago"
              value={formData.tipoPago}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="seña">Seña</option>
              <option value="pago">Pago</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Método de Pago *</label>
            <select
              name="metodo"
              value={formData.metodo}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="efectivo">Efectivo</option>
              <option value="transferencia">Transferencia Bancaria</option>
              <option value="cheque">Cheque</option>
              <option value="tarjeta">Tarjeta</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Observación (opcional)</label>
            <textarea
              name="observacion"
              value={formData.observacion}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              placeholder="Número de comprobante, detalles, etc."
            ></textarea>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Registrar Pago
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

export default RegistrarPagoModal