import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import RegistrarPagoModal from '../../components/admin/RegistrarPagoModal'
import { ArrowLeft, Calendar, User, Phone, DollarSign, Plus, Edit, XCircle } from 'lucide-react'

function DetalleReserva() {
  const [reserva, setReserva] = useState({
    id: 1,
    cliente: 'María González',
    telefono: '+595981234567',
    fecha: '2025-01-15',
    horario: 'noche',
    tipoEvento: 'Cumpleaños de 15',
    montoTotal: 2000000,
    totalPagado: 500000,
    estado: 'confirmada',
    observacion: 'Cliente solicita decoración rosada',
    pagos: [
      { 
        id: 1, 
        monto: 500000, 
        tipoPago: 'seña', 
        metodo: 'efectivo', 
        fecha: '2024-12-20',
        observacion: 'Seña inicial' 
      }
    ]
  })

  const [showRegistrarPago, setShowRegistrarPago] = useState(false)

  const handleGuardarPago = (pago) => {
    const nuevosPagos = [...reserva.pagos, { ...pago, id: reserva.pagos.length + 1 }]
    const nuevoTotalPagado = reserva.totalPagado + pago.monto

    setReserva({
      ...reserva,
      pagos: nuevosPagos,
      totalPagado: nuevoTotalPagado
    })

    setShowRegistrarPago(false)
    alert('Pago registrado exitosamente')
  }

  const handleCancelarReserva = () => {
    if (confirm('¿Está seguro de cancelar esta reserva?')) {
      setReserva({ ...reserva, estado: 'cancelada' })
      alert('Reserva cancelada')
    }
  }

  const saldo = reserva.montoTotal - reserva.totalPagado
  const estadoPago = reserva.totalPagado >= reserva.montoTotal ? 'Pagado' : 'Pendiente'

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          
          <Link 
            to="/admin/reservas"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 transition font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Reservas
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Detalle de Reserva #{reserva.id}
              </h1>
              <p className="text-gray-600">{reserva.cliente}</p>
            </div>
            <span className={`
              px-4 py-2 rounded-full text-sm font-medium
              ${reserva.estado === 'confirmada' ? 'bg-green-100 text-green-700' : ''}
              ${reserva.estado === 'cancelada' ? 'bg-red-100 text-red-700' : ''}
            `}>
              {reserva.estado.charAt(0).toUpperCase() + reserva.estado.slice(1)}
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            
            <div className="lg:col-span-2 space-y-6">
              
              {/* Cliente */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  Información del Cliente
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Nombre</p>
                    <p className="font-medium text-gray-900">{reserva.cliente}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Teléfono</p>
                    <div className="flex gap-2">
                      <a 
                        href={`tel:${reserva.telefono}`}
                        className="font-medium text-purple-600 hover:underline"
                      >
                        {reserva.telefono}
                      </a>
                      <a 
                        href={`https://wa.me/${reserva.telefono.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evento */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Información del Evento
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Fecha</p>
                    <p className="font-medium text-gray-900">{reserva.fecha}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Horario</p>
                    <p className="font-medium text-gray-900 capitalize">{reserva.horario}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Tipo de Evento</p>
                    <p className="font-medium text-gray-900">{reserva.tipoEvento}</p>
                  </div>
                  {reserva.observacion && (
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-600 mb-1">Observación</p>
                      <p className="font-medium text-gray-900">{reserva.observacion}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pagos */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                    Historial de Pagos
                  </h2>
                  <button
                    onClick={() => setShowRegistrarPago(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition inline-flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Registrar Pago
                  </button>
                </div>

                {reserva.pagos.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Fecha</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Tipo</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Método</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-700">Monto</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reserva.pagos.map((pago) => (
                          <tr key={pago.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-gray-700">{pago.fecha}</td>
                            <td className="py-3 px-4">
                              <span className="capitalize text-gray-700">{pago.tipoPago}</span>
                            </td>
                            <td className="py-3 px-4">
                              <span className="capitalize text-gray-700">{pago.metodo}</span>
                            </td>
                            <td className="py-3 px-4 text-right font-medium text-green-600">
                              Gs. {pago.monto.toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No hay pagos registrados
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Resumen */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen de Pagos</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Monto Total</span>
                    <span className="font-bold text-gray-900">
                      Gs. {reserva.montoTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <span className="text-gray-600">Total Pagado</span>
                    <span className="font-bold text-green-600">
                      Gs. {reserva.totalPagado.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saldo Pendiente</span>
                    <span className={`font-bold ${saldo > 0 ? 'text-red-600' : 'text-gray-400'}`}>
                      Gs. {saldo.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <span className={`
                    inline-block w-full text-center px-4 py-2 rounded-lg text-sm font-medium
                    ${estadoPago === 'Pagado' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}
                  `}>
                    {estadoPago}
                  </span>
                </div>
              </div>

              {/* Acciones */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Acciones</h3>
                
                <button
                  onClick={() => setShowRegistrarPago(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Registrar Pago
                </button>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2">
                  <Edit className="w-5 h-5" />
                  Editar Reserva
                </button>

                {reserva.estado === 'confirmada' && (
                  <button
                    onClick={handleCancelarReserva}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-5 h-5" />
                    Cancelar Reserva
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {showRegistrarPago && (
        <RegistrarPagoModal
          reserva={reserva}
          onClose={() => setShowRegistrarPago(false)}
          onGuardar={handleGuardarPago}
        />
      )}
    </div>
  )
}

export default DetalleReserva