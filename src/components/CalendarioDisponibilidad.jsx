import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function CalendarioDisponibilidad({ onSelectDate }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  // Días ocupados de ejemplo
  const diasOcupados = [
    '2024-12-25',
    '2024-12-31',
    '2025-01-01',
    '2025-01-15'
  ]

  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const lastDate = new Date(year, month + 1, 0).getDate()
    
    const days = []
    
    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }
    
    for (let i = 1; i <= lastDate; i++) {
      days.push(i)
    }
    
    return days
  }

  const isDateOccupied = (day) => {
    if (!day) return false
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const dayStr = String(day).padStart(2, '0')
    const dateStr = `${year}-${month}-${dayStr}`
    return diasOcupados.includes(dateStr)
  }

  const isDatePast = (day) => {
    if (!day) return false
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return checkDate < today
  }

  const handleDateClick = (day) => {
    if (!day || isDateOccupied(day) || isDatePast(day)) return
    
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const dayStr = String(day).padStart(2, '0')
    const dateStr = `${year}-${month}-${dayStr}`
    
    setSelectedDate(dateStr)
    onSelectDate(dateStr)
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const days = getDaysInMonth(currentDate)

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={previousMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold text-gray-900">
          {meses[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Días de la semana */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {dias.map((dia) => (
          <div key={dia} className="text-center text-sm font-semibold text-gray-600">
            {dia}
          </div>
        ))}
      </div>

      {/* Días del mes */}
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, idx) => {
          const occupied = isDateOccupied(day)
          const past = isDatePast(day)
          const year = currentDate.getFullYear()
          const month = String(currentDate.getMonth() + 1).padStart(2, '0')
          const dayStr = String(day).padStart(2, '0')
          const dateStr = `${year}-${month}-${dayStr}`
          const isSelected = selectedDate === dateStr

          return (
            <button
              key={idx}
              onClick={() => handleDateClick(day)}
              disabled={!day || occupied || past}
              className={`
                aspect-square flex items-center justify-center rounded-lg text-sm font-medium
                transition
                ${!day ? 'invisible' : ''}
                ${occupied ? 'bg-red-100 text-red-600 cursor-not-allowed' : ''}
                ${past && !occupied ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''}
                ${!occupied && !past && day ? 'bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer' : ''}
                ${isSelected ? 'bg-purple-600 text-white hover:bg-purple-700' : ''}
              `}
            >
              {day}
            </button>
          )
        })}
      </div>

      {/* Leyenda */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-50 border-2 border-green-200 rounded"></div>
          <span className="text-gray-600">Disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-100 border-2 border-red-200 rounded"></div>
          <span className="text-gray-600">Ocupado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-600 rounded"></div>
          <span className="text-gray-600">Seleccionado</span>
        </div>
      </div>
    </div>
  )
}

export default CalendarioDisponibilidad