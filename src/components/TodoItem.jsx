const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b">
      <span
        className={`flex-1 ${task.completed ? 'line-through' : ''}`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button
        className="bg-red-500 text-white px-2 py-1 ml-2"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
