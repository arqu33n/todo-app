import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ArchivePage from './ArchivePage'

test('renders Archive page with tasks', () => {
  const mockTasks = [
    { id: 1, text: 'Archived task 1' },
    { id: 2, text: 'Archived task 2' },
  ]

  const mockClearArchive = jest.fn()

  render(
    <MemoryRouter>
      <ArchivePage archivedTasks={mockTasks} clearArchive={mockClearArchive} />
    </MemoryRouter>
  )

  expect(screen.getByText(/Archived Tasks/i)).toBeInTheDocument()
  expect(screen.getByText(/Archived task 1/i)).toBeInTheDocument()
  expect(screen.getByText(/Archived task 2/i)).toBeInTheDocument()

  expect(screen.getByText(/Clear Archive/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Clear Archive/i))

  expect(mockClearArchive).toHaveBeenCalledTimes(1)
})

test('renders Archive page with no tasks', () => {
  const mockTasks = []

  const mockClearArchive = jest.fn()

  render(
    <MemoryRouter>
      <ArchivePage archivedTasks={mockTasks} clearArchive={mockClearArchive} />
    </MemoryRouter>
  )

  expect(screen.getByText(/No archived tasks/i)).toBeInTheDocument()

  expect(screen.getByText(/Clear Archive/i)).toBeInTheDocument()
})
