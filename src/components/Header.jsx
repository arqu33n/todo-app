import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      {/* Заголовок */}
      <h1 className="text-3xl font-semibold">ToDo App</h1>

      {/* Навигация */}
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/todo-app//home"
              className="text-white hover:text-blue-300 transition-all duration-300"
            >
              Task list
            </Link>
          </li>
          <li>
            <Link
              to="/todo-app//archive"
              className="text-white hover:text-blue-300 transition-all duration-300"
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
