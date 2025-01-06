const ArchivePage = ({ archivedTasks, clearArchive }) => {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Archived Tasks</h2>
        {archivedTasks.length > 0 ? (
          archivedTasks.map((task) => (
            <div key={task.id} className="p-2 border-b">
              {task.text}
            </div>
          ))
        ) : (
          <p>No archived tasks</p>
        )}
        <button
          className="bg-red-500 text-white px-4 py-2 mt-2"
          onClick={clearArchive}
        >
          Clear Archive
        </button>
      </div>
    </div>
  )
}

export default ArchivePage
