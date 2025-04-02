import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import ArchivePage from './pages/ArchivePage'
import Header from './components/Header'

function App() {
  const [tasks, setTasks] = useState([]) // Состояние для текущих задач
  const [archivedTasks, setArchivedTasks] = useState([]) // Состояние для архивированных задач

  // Функция для добавления задачи
  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false }
    setTasks([...tasks, newTask])
  }

  // Функция для удаления задачи и перемещения ее в архив
  const deleteTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id)
    if (taskToDelete) {
      setArchivedTasks([...archivedTasks, taskToDelete]) // Перемещаем задачу в архив
      setTasks(tasks.filter((task) => task.id !== id)) // Удаляем задачу из текущего списка
    }
  }

  // Функция для очистки архива
  const clearArchive = () => {
    setArchivedTasks([]) // Очищаем архив
  }

  return (
    <Router basename="/todo-app">
      <div>
        {/* Хедер, который будет один раз */}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
            }
          />
          <Route
            path="/home"
            element={
              <Home tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
            }
          />
          <Route
            path="/completed"
            element={
              <ArchivePage
                archivedTasks={archivedTasks}
                clearArchive={clearArchive}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
