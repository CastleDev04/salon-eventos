import { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { Bell, Calendar, DollarSign, ArrowRight } from 'lucide-react'

function Dashboard() {
  const [stats] = useState({
    solicitudesPendientes: 3,
    reservasProximas: 2,
    pagosPendientes: 5
  })

  const [proximasReservas] = useState([
    {
      id: 1,
      cliente: 'María González',
      fecha: '2024-12-28',
      evento: 'Cumpleaños'
    },
    {
      id: 2,
      cliente: 'Juan Pérez',
      fecha: '2024-12-30',
      evento: 'Boda'
    }
  ])

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Resumen general del sistema</p>
          </div>

          {/* Cards de estadísticas */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            {/* Solicitudes Pendientes */}
            <Link to="/admin/solicitudes">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 cursor-pointer border-l-4 border-yellow-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">
                      Solicitudes Pendientes
                    </p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {stats.solicitudesPendientes}
                    </h3>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Bell className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-yellow-600 text-sm font-medium">
                  Ver solicitudes <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Reservas Próximas */}
            <Link to="/admin/reservas">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 cursor-pointer border-l-4 border-blue-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">
                      Reservas Esta Semana
                    </p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {stats.reservasProximas}
                    </h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Ver reservas <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Pagos Pendientes */}
            <Link to="/admin/reservas">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 cursor-pointer border-l-4 border-red-500">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">
                      Pagos Pendientes
                    </p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {stats.pagosPendientes}
                    </h3>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <DollarSign className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-red-600 text-sm font-medium">
                  Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Próximas reservas */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Próximas Reservas
            </h2>
            
            {proximasReservas.length > 0 ? (
              <div className="space-y-3">
                {proximasReservas.map((reserva) => (
                  <div 
                    key={reserva.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-600 p-3 rounded-full">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{reserva.cliente}</h3>
                        <p className="text-sm text-gray-600">{reserva.evento}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{reserva.fecha}</p>
                      <Link 
                        to={`/admin/reservas/${reserva.id}`}
                        className="text-sm text-purple-600 hover:underline"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">
                No hay reservas próximas
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard