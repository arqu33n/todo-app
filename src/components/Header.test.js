import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Для тестирования с роутером
import Header from './Header'

test('renders ToDo App header and navigation links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )

  expect(screen.getByText(/ToDo App/i)).toBeInTheDocument()

  expect(screen.getByText(/Task list/i)).toBeInTheDocument()
  expect(screen.getByText(/Archive/i)).toBeInTheDocument()
})
