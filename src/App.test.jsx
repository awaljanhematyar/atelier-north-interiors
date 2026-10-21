import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

function renderApp(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)
}

describe('application shell and routes', () => {
  it('provides landmarks, a skip link and visible demo transparency', () => {
    renderApp()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toHaveTextContent('fictional portfolio demonstration')
    expect(screen.getByRole('main')).toContainElement(screen.getByRole('heading', { level: 1 }))
    fireEvent.click(screen.getByRole('link', { name: 'Skip to content' }))
    expect(screen.getByRole('main')).toHaveFocus()
  })

  it.each([
    ['/', 'Spaces That Tell Your Story.'],
    ['/projects', 'Projects'],
    ['/projects/cedar-and-light', 'Cedar & Light'],
    ['/services', 'Services'],
    ['/about', 'About Atelier North'],
    ['/testimonials', 'Testimonials'],
    ['/consultation', 'Consultation'],
    ['/contact', 'Contact'],
    ['/unknown/path', 'A space yet to be found.'],
  ])('renders %s with its heading and document title', (path, heading) => {
    renderApp(path)
    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeVisible()
    expect(document.title).toContain('Atelier North Interiors')
    expect(document.title).not.toContain('Setup')
  })

  it('provides the correct primary links and active route', () => {
    renderApp('/projects')
    const nav = within(screen.getByRole('navigation', { name: 'Primary' }))
    for (const [name, path] of [['Projects', '/projects'], ['Services', '/services'], ['About', '/about'], ['Testimonials', '/testimonials'], ['Contact', '/contact']]) {
      expect(nav.getByRole('link', { name })).toHaveAttribute('href', path)
    }
    expect(nav.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page')
    fireEvent.click(nav.getByRole('link', { name: 'Services' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Services' })).toBeVisible()
    expect(screen.getByRole('main')).toHaveFocus()
  })

  it('opens and closes the mobile navigation and restores focus on Escape', () => {
    renderApp()
    const toggle = screen.getByRole('button', { name: 'Open navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    within(mobile).getByRole('link', { name: 'Projects' }).focus()
    fireEvent.keyDown(document.activeElement, { key: 'Escape' })
    expect(toggle).toHaveFocus()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    fireEvent.click(screen.getByRole('button', { name: 'Close navigation' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile navigation after navigating, including the current route', () => {
    renderApp()
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', { name: 'Projects' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible()
    expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile' })).getByRole('link', { name: 'Projects' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes navigation when focus leaves the header', () => {
    renderApp()
    const toggle = screen.getByRole('button', { name: 'Open navigation' })
    fireEvent.click(toggle)
    fireEvent.blur(toggle, { relatedTarget: screen.getByRole('main') })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('provides working 404 recovery', () => {
    renderApp('/not-a-page')
    expect(screen.getByText('404 / A little off plan')).toBeVisible()
    expect(screen.getByRole('link', { name: 'Explore projects' })).toHaveAttribute('href', '/projects')
    fireEvent.click(screen.getByRole('link', { name: 'Return home' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Spaces That Tell Your Story.' })).toBeVisible()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
})
