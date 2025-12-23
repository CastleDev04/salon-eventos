import { X, Phone, Calendar, Clock, MessageSquare } from 'lucide-react'

function SolicitudModal({ solicitud, onClose, onAceptar, onContactado, onRechazar }) {
  if (!solicitud) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-purple-600 text-white p-6 rounded-t-xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">Detalle de Solicitud</h2>
          <button
            onClick={onClose}
            className="hover:bg-purple-700 p-2 rounded-full transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">
          
          {/* Información del cliente */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Información del Cliente</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Nombre:</span>
                <span className="text-gray-600">{solicitud.nombre}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-gray-700">Teléfono:</span>
                <a 
                  href={`tel:${solicitud.telefono}`}
                  className="text-purple-600 hover:underline"
                >
                  {solicitud.telefono}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-600" />
                <a 
                  href={`https://wa.me/${solicitud.telefono.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Enviar WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Detalles del evento */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3">Detalles del Evento</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-gray-700">Fecha:</span>
                <span className="text-gray-600">{solicitud.fecha}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-gray-700">Horario:</span>
                <span className="text-gray-600">{solicitud.horario}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-gray-700">Tipo:</span>
                <span className="text-gray-600">{solicitud.tipoEvento}</span>
              </div>
            </div>
          </div>

          {/* Comentario adicional */}
          {solicitud.comentario && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Comentario</h3>
              <p className="text-gray-600">{solicitud.comentario}</p>
            </div>
          )}

          {/* Estado actual */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Estado Actual</h3>
            <span className={`
              inline-block px-3 py-1 rounded-full text-sm font-medium
              ${solicitud.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-700' : ''}
              ${solicitud.estado === 'contactado' ? 'bg-blue-100 text-blue-700' : ''}
              ${solicitud.estado === 'aceptado' ? 'bg-green-100 text-green-700' : ''}
              ${solicitud.estado === 'rechazado' ? 'bg-red-100 text-red-700' : ''}
            `}>
              {solicitud.estado.charAt(0).toUpperCase() + solicitud.estado.slice(1)}
            </span>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="bg-gray-50 p-6 rounded-b-xl flex flex-wrap gap-3">
          {solicitud.estado === 'pendiente' && (
            <>
              <button
                onClick={() => onContactado(solicitud.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Marcar como Contactado
              </button>
              <button
                onClick={() => onAceptar(solicitud)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Aceptar y Crear Reserva
              </button>
              <button
                onClick={() => onRechazar(solicitud.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Rechazar
              </button>
            </>
          )}
          
          {solicitud.estado === 'contactado' && (
            <>
              <button
                onClick={() => onAceptar(solicitud)}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Aceptar y Crear Reserva
              </button>
              <button
                onClick={() => onRechazar(solicitud.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Rechazar
              </button>
            </>
          )}

          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-medium transition ml-auto"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default SolicitudModal