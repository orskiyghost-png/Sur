import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Surkove.ru
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Персональное портфолио
        </p>
        <div className="space-y-4">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Счётчик: {count}
          </button>
          <p className="text-sm text-gray-500">
            Проект успешно инициализирован! ✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
