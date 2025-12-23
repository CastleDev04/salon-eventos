import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { Eye, Filter, Calendar } from 'lucide-react'

function Reservas() {
  const [reservas] = useState([
    {
      id: 1,
      cliente: 'María González',
      telefono: '+595981234567',
      fecha: '2025-01-15',
      horario: 'noche',
      tipoEvento: 'Cumpleaños de 15',
      montoTotal: 2000000,
      totalPagado: 500000,
      estado: 'confirmada',
      pagos: [
        { id: 1, monto: 500000, tipoPago: 'seña', metodo: 'efectivo', fecha: '2024-12-20' }
      ]
    },
    {
      id: 2,
      cliente: 'Juan Pérez',
      telefono: '+595981234568',
      fecha: '2025-01-20',
      horario: 'tarde',
      tipoEvento: 'Boda',
      montoTotal: 5000000,
      totalPagado: 5000000,
      estado: 'confirmada',
      pagos: [
        { id: 1, monto: 2000000, tipoPago: 'seña', metodo: 'transferencia', fecha: '2024-12-15' },
        { id: 2, monto: 3000000, tipoPago: 'pago', metodo: 'efectivo', fecha: '2024-12-22' }
      ]
    },
    {
      id: 3,
      cliente: 'Carlos Rodríguez',
      telefono: '+595981234569',
      fecha: '2025-02-05',
      horario: 'mañana',
      tipoEvento: 'Cumpleaños',
      montoTotal: 1500000,
      totalPagado: 0,
      estado: 'confirmada',
      pagos: []
    }
  ])

  const [filtroEstado, setFiltroEstado] = useState('todos')
  const [filtroPago, setFiltroPago] = useState('todos')

  const calcularSaldo = (reserva) => {
    return reserva.montoTotal - reserva.totalPagado
  }

  const getEstadoPago = (reserva) => {
    if (reserva.totalPagado === 0) return 'Sin pagar'
    if (reserva.totalPagado >= reserva.montoTotal) return 'Pagado'
    return 'Pendiente'
  }

  let reservasFiltradas = reservas

  if (filtroEstado !== 'todos') {
    reservasFiltradas = reservasFiltradas.filter(r => r.estado === filtroEstado)
  }

  if (filtroPago !== 'todos') {
    reservasFiltradas = reservasFiltradas.filter(r => {
      const estadoPago = getEstadoPago(r)
      if (filtroPago === 'pagado') return estadoPago === 'Pagado'
      if (filtroPago === 'pendiente') return estadoPago !== 'Pagado'
      return true
    })
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reservas</h1>
            <p className="text-gray-600">Gestiona las reservas confirmadas</p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Estado:</span>
                <select
                  value={filtroEstado}
                  onChange={(e) => setFiltroEstado(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="todos">Todos</option>
                  <option value="confirmada">Confirmadas</option>
                  <option value="cancelada">Canceladas</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Pago:</span>
                <select
                  value={filtroPago}
                  onChange={(e) => setFiltroPago(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="todos">Todos</option>
                  <option value="pagado">Pagados</option>
                  <option value="pendiente">Pendientes</option>
                </select>
              </div>

              <span className="ml-auto text-gray-600">
                Total: <strong>{reservasFiltradas.length}</strong>
              </span>
            </div>
          </div>

          {/* Tabla */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Cliente</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Fecha</th>
                    <th className="text-right py-4 px-6 font-semibold text-gray-700">Monto Total</th>
                    <th className="text-right py-4 px-6 font-semibold text-gray-700">Total Pagado</th>
                    <th className="text-right py-4 px-6 font-semibold text-gray-700">Saldo</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Estado Pago</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {reservasFiltradas.map((reserva) => {
                    const saldo = calcularSaldo(reserva)
                    const estadoPago = getEstadoPago(reserva)

                    return (
                      <tr key={reserva.id} className="border-b hover:bg-gray-50 transition">
                        <td className="py-4 px-6">
                          <div>
                            <p className="font-medium text-gray-900">{reserva.cliente}</p>
                            <p className="text-sm text-gray-500">{reserva.tipoEvento}</p>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-purple-600" />
                            <span className="text-gray-700">{reserva.fecha}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right font-medium text-gray-900">
                          Gs. {reserva.montoTotal.toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-right text-green-600 font-medium">
                          Gs. {reserva.totalPagado.toLocaleString()}
                        </td>
                        <td className="py-4 px-6 text-right font-medium">
                          <span className={saldo > 0 ? 'text-red-600' : 'text-gray-400'}>
                            Gs. {saldo.toLocaleString()}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className={`
                            inline-block px-3 py-1 rounded-full text-xs font-medium
                            ${estadoPago === 'Pagado' ? 'bg-green-100 text-green-700' : ''}
                            ${estadoPago === 'Pendiente' ? 'bg-red-100 text-red-700' : ''}
                            ${estadoPago === 'Sin pagar' ? 'bg-gray-100 text-gray-700' : ''}
                          `}>
                            {estadoPago}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <Link
                            to={`/admin/reservas/${reserva.id}`}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition inline-flex items-center gap-2"
                          >
                            <Eye className="w-4 h-4" />
                            Ver
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>

              {reservasFiltradas.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No hay reservas que coincidan con los filtros
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Reservas