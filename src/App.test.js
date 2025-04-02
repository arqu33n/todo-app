import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app and routes to Home and Completed pages', () => {
  window.history.pushState({}, 'Test page', '/todo-app')
  render(<App />)

  expect(screen.getByText('Completed')).toBeInTheDocument()
  expect(screen.getByText(/Task list/i)).toBeInTheDocument()
  const inputElement = screen.getByRole('textbox')
  expect(inputElement).toBeInTheDocument()
})
