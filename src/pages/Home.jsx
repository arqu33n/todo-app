import { useState } from 'react'
import TodoList from '../components/TodoList'
// import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = ({ tasks, addTask, deleteTask }) => {
  const [newTask, setNewTask] = useState('')

  // Функция для добавления задачи
  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask) // Добавляем задачу
      setNewTask('') // Очищаем поле ввода
    }
  }

  // Функция для переключения состояния задачи (выполнена/не выполнена)
  const toggleTask = (id) => {
    tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="border p-2 w-full mb-2"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTask()
          }}
        />
        <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        <Link
          to="/archive"
          className="block mt-4 bg-blue-500 text-white p-2 text-center"
        >
          Go to Archive
        </Link>
      </div>
    </div>
  )
}

export default Home
