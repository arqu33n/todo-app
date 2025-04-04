import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

test('renders Home component and interacts with tasks', () => {
  // мокап введеных тасок в todo
  const mockTasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ]
  // ожидается, что add и delete - функции
  const mockAddTask = jest.fn()
  const mockDeleteTask = jest.fn()
  // рендерю компонент
  render(
    <MemoryRouter>
      <Home
        tasks={mockTasks}
        addTask={mockAddTask}
        deleteTask={mockDeleteTask}
      />
    </MemoryRouter>
  )
  expect(screen.getByText('Task 1')).toBeInTheDocument()
  expect(screen.getByText('Task 2')).toBeInTheDocument()

  const inputElement = screen.getByPlaceholderText('Add a new task')
  expect(inputElement).toBeInTheDocument()

  fireEvent.change(inputElement, { target: { value: 'New Task' } })
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })

  expect(mockAddTask).toHaveBeenCalledWith('New Task')
  expect(mockAddTask).toHaveBeenCalledTimes(1)

  const deleteButton = screen.getAllByText('Done')[0]
  fireEvent.click(deleteButton)

  expect(mockDeleteTask).toHaveBeenCalledWith(mockTasks[0].id)
  expect(mockDeleteTask).toHaveBeenCalledTimes(1)
})
