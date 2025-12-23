import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FileText, Calendar, LogOut } from 'lucide-react'

function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: '/admin/dashboard'
    },
    {
      name: 'Solicitudes',
      icon: <FileText className="w-5 h-5" />,
      path: '/admin/solicitudes'
    },
    {
      name: 'Reservas',
      icon: <Calendar className="w-5 h-5" />,
      path: '/admin/reservas'
    }
  ]

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    navigate('/admin/login')
  }

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6 flex flex-col">
      
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Sistema Interno</h2>
        <p className="text-gray-400 text-sm">Salón de Eventos</p>
      </div>

      {/* Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition
                    ${isActive 
                      ? 'bg-purple-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800'
                    }
                  `}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition w-full"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Cerrar Sesión</span>
      </button>
    </aside>
  )
}

export default Sidebar