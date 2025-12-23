import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import SolicitudModal from '../../components/admin/SolicitudModal'
import CrearReservaModal from '../../components/admin/CrearReservaModal'
import { Eye, Filter } from 'lucide-react'

function Solicitudes() {
  const navigate = useNavigate()
  
  const [solicitudes, setSolicitudes] = useState([
    {
      id: 1,
      nombre: 'María González',
      telefono: '+595981234567',
      fecha: '2025-01-15',
      horario: 'noche',
      tipoEvento: 'Cumpleaños de 15',
      comentario: 'Necesito decoración incluida',
      estado: 'pendiente',
      fechaSolicitud: '2024-12-20'
    },
    {
      id: 2,
      nombre: 'Juan Pérez',
      telefono: '+595981234568',
      fecha: '2025-01-20',
      horario: 'tarde',
      tipoEvento: 'Boda',
      comentario: '',
      estado: 'contactado',
      fechaSolicitud: '2024-12-21'
    },
    {
      id: 3,
      nombre: 'Ana Silva',
      telefono: '+595981234569',
      fecha: '2025-02-10',
      horario: 'mañana',
      tipoEvento: 'Cumpleaños',
      comentario: 'Evento para 100 personas',
      estado: 'pendiente',
      fechaSolicitud: '2024-12-22'
    }
  ])

  const [selectedSolicitud, setSelectedSolicitud] = useState(null)
  const [showCrearReserva, setShowCrearReserva] = useState(false)
  const [filtroEstado, setFiltroEstado] = useState('todos')

  const handleVerDetalle = (solicitud) => {
    setSelectedSolicitud(solicitud)
  }

  const handleContactado = (id) => {
    setSolicitudes(solicitudes.map(s => 
      s.id === id ? { ...s, estado: 'contactado' } : s
    ))
    setSelectedSolicitud(null)
  }

  const handleRechazar = (id) => {
    if (confirm('¿Está seguro de rechazar esta solicitud?')) {
      setSolicitudes(solicitudes.map(s => 
        s.id === id ? { ...s, estado: 'rechazado' } : s
      ))
      setSelectedSolicitud(null)
    }
  }

  const handleAceptar = (solicitud) => {
    setSelectedSolicitud(solicitud)
    setShowCrearReserva(true)
  }

  const handleGuardarReserva = (reservaData) => {
    console.log('Nueva reserva:', reservaData)
    
    setSolicitudes(solicitudes.map(s => 
      s.id === reservaData.solicitudId ? { ...s, estado: 'aceptado' } : s
    ))
    
    setShowCrearReserva(false)
    setSelectedSolicitud(null)
    
    alert('Reserva creada exitosamente')
    navigate('/admin/reservas')
  }

  const solicitudesFiltradas = filtroEstado === 'todos' 
    ? solicitudes 
    : solicitudes.filter(s => s.estado === filtroEstado)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Solicitudes</h1>
            <p className="text-gray-600">Gestiona las solicitudes recibidas desde el sitio web</p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filtrar por estado:</span>
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              >
                <option value="todos">Todos</option>
                <option value="pendiente">Pendientes</option>
                <option value="contactado">Contactados</option>
                <option value="aceptado">Aceptados</option>
                <option value="rechazado">Rechazados</option>
              </select>
              <span className="ml-auto text-gray-600">
                Total: <strong>{solicitudesFiltradas.length}</strong>
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
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Fecha Solicitada</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Horario</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Tipo de Evento</th>
                    <th className="text-left py-4 px-6 font-semibold text-gray-700">Estado</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {solicitudesFiltradas.map((solicitud) => (
                    <tr key={solicitud.id} className="border-b hover:bg-gray-50 transition">
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">{solicitud.nombre}</p>
                          <p className="text-sm text-gray-500">{solicitud.telefono}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{solicitud.fecha}</td>
                      <td className="py-4 px-6">
                        <span className="capitalize text-gray-700">{solicitud.horario}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-700">{solicitud.tipoEvento}</td>
                      <td className="py-4 px-6">
                        <span className={`
                          inline-block px-3 py-1 rounded-full text-xs font-medium
                          ${solicitud.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-700' : ''}
                          ${solicitud.estado === 'contactado' ? 'bg-blue-100 text-blue-700' : ''}
                          ${solicitud.estado === 'aceptado' ? 'bg-green-100 text-green-700' : ''}
                          ${solicitud.estado === 'rechazado' ? 'bg-red-100 text-red-700' : ''}
                        `}>
                          {solicitud.estado.charAt(0).toUpperCase() + solicitud.estado.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => handleVerDetalle(solicitud)}
                          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition inline-flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Ver
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {solicitudesFiltradas.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No hay solicitudes con ese estado
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {selectedSolicitud && !showCrearReserva && (
        <SolicitudModal
          solicitud={selectedSolicitud}
          onClose={() => setSelectedSolicitud(null)}
          onAceptar={handleAceptar}
          onContactado={handleContactado}
          onRechazar={handleRechazar}
        />
      )}

      {showCrearReserva && selectedSolicitud && (
        <CrearReservaModal
          solicitud={selectedSolicitud}
          onClose={() => {
            setShowCrearReserva(false)
            setSelectedSolicitud(null)
          }}
          onGuardar={handleGuardarReserva}
        />
      )}
    </div>
  )
}

export default Solicitudes