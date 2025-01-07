import { useState } from 'react'
import TodoList from '../components/TodoList'
// import Header from '../components/Header'

const Home = ({ tasks, addTask, deleteTask }) => {
  const [newTask, setNewTask] = useState('')
  const [isError, setIsError] = useState(false)

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask)
      setNewTask('')
    } else {
      setIsError(true)
      setTimeout(() => setIsError(false), 2000)
    }
  }
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
        <button
          className={`block mt-4 ${
            isError
              ? 'border-2 border-red-500 text-red-500'
              : 'bg-blue-500 text-white'
          } p-2 text-center w-full`}
          onClick={() => handleAddTask()}
        >
          {isError ? 'Please enter a task!' : 'Add task'}
        </button>
      </div>
    </div>
  )
}

export default Home
