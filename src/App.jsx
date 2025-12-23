import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Disponibilidad from './pages/Disponibilidad'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import Solicitudes from './pages/admin/Solicitudes'
import Reservas from './pages/admin/Reservas'
import DetalleReserva from './pages/admin/DetalleReserva'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/disponibilidad" element={<Disponibilidad />} />
        
        {/* Rutas del sistema interno */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/solicitudes" element={<Solicitudes />} />
        <Route path="/admin/reservas" element={<Reservas />} />
        <Route path="/admin/reservas/:id" element={<DetalleReserva />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App