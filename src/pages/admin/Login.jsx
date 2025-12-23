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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-purple-600 p-4 rounded-full">
            <Calendar className="w-12 h-12 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Sistema Interno
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Salón de Eventos
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Usuario */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Usuario
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                placeholder="admin"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Ingresar al Sistema
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Usuario de prueba: <strong>admin</strong> / <strong>admin123</strong>
        </p>
      </div>
    </div>
  )
}

export default Login