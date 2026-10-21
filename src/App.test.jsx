import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('initial application shell', () => {
  it('renders an accessible main landmark and project heading inside the router', () => {
    render(<MemoryRouter><App /></MemoryRouter>)
    expect(screen.getByRole('main')).toContainElement(
      screen.getByRole('heading', { level: 1, name: 'Atelier North Interiors' }),
    )
  })

  it('discloses the demo and unfinished scope', () => {
    render(<MemoryRouter><App /></MemoryRouter>)
    expect(screen.getByText(/Portfolio demo\. Website pages and features are not implemented yet\./)).toBeVisible()
  })
})
