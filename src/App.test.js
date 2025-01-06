import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app and routes to Home and Archive pages', () => {
  render(<App />)

  expect(screen.getByText('Archive')).toBeInTheDocument()
  expect(screen.getByText('Go to Archive')).toBeInTheDocument()
  expect(screen.getByText(/Task list/i)).toBeInTheDocument()
  const inputElement = screen.getByRole('textbox')
  expect(inputElement).toBeInTheDocument()
})
