import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, Lock, User } from 'lucide-react'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    usuario: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.usuario === 'admin' && formData.password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      navigate('/admin/dashboard')
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md border border-gray-100">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-primary p-5 rounded-full shadow-md">
            <Calendar className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-1">
          Sistema Interno
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Salón de Eventos
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Usuario */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Usuario</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
                placeholder="admin"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-primary/90 transition flex items-center justify-center gap-2"
          >
            Ingresar al Sistema
          </button>
        </form>

        {/* Info de prueba */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Usuario de prueba: <strong>admin</strong> / <strong>admin123</strong>
        </p>
      </div>
    </div>
  )
}

export default Login
