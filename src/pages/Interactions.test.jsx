import { fireEvent, render, screen, within, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../App.jsx'
import { categories, projects } from '../data/projects.js'
import { faqs } from '../data/studio.js'
import { vancouverToday } from '../utils/validation.js'

async function renderPage(path) { const view = render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>); await waitFor(() => expect(screen.queryByText('Loading page…')).not.toBeInTheDocument()); await screen.findByRole('heading', { level: 1 }); return view }
afterEach(() => vi.unstubAllGlobals())

describe('project category filters', () => {
  it('defaults to all twelve and falls back safely for an unknown URL category', async () => {
    await renderPage('/projects?category=unknown')
    expect(screen.getByRole('button', { name: /^All Projects/ })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('Showing 12 of 12')
    expect(screen.getAllByRole('link', { name: /^Explore / }).filter(link => link.getAttribute('href').startsWith('/projects/'))).toHaveLength(12)
  })

  it.each(categories)('selects $label with the right cards, count and active state', async category => {
    await renderPage('/projects')
    const button = screen.getByRole('button', { name: new RegExp('^' + category.label) })
    button.focus()
    fireEvent.click(button)
    expect(button).toHaveFocus()
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('Showing 3 of 12')
    for (const project of projects) {
      const link = screen.queryByRole('link', { name: name => name.includes(project.title) })
      if (project.category === category.id) expect(link).toBeVisible()
      else expect(link).not.toBeInTheDocument()
    }
    fireEvent.click(screen.getByRole('button', { name: /^All Projects/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Showing 12 of 12')
  })

  it('restores a category directly from its URL', async () => {
    await renderPage('/projects?category=hospitality')
    expect(screen.getByRole('button', { name: /^Hospitality/ })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('status')).toHaveTextContent('Showing 3 of 12')
  })
})

describe('gallery dialog', () => {
  it('opens, cycles via buttons and arrows, closes on Escape and restores focus', async () => {
    await renderPage('/projects/cedar-and-light')
    const trigger = screen.getByRole('button', { name: /^Open image 1 of/ })
    trigger.focus()
    fireEvent.click(trigger)
    const dialog = screen.getByRole('dialog', { name: 'Reference image gallery' })
    const gallery = within(dialog)
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(gallery.getByRole('button', { name: 'Close image gallery' })).toHaveFocus()
    expect(gallery.getByText(/^Image 1 of 3:/)).toBeVisible()
    fireEvent.click(gallery.getByRole('button', { name: 'Next image' }))
    expect(gallery.getByText(/^Image 2 of 3:/)).toBeVisible()
    fireEvent.click(gallery.getByRole('button', { name: 'Previous image' }))
    expect(gallery.getByText(/^Image 1 of 3:/)).toBeVisible()
    fireEvent.keyDown(dialog, { key: 'ArrowLeft' })
    expect(gallery.getByText(/^Image 3 of 3:/)).toBeVisible()
    fireEvent.keyDown(dialog, { key: 'ArrowRight' })
    expect(gallery.getByText(/^Image 1 of 3:/)).toBeVisible()
    fireEvent.keyDown(dialog, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
    expect(document.body.style.overflow).not.toBe('hidden')
  })

  it('opens a chosen thumbnail, retains safe fallback and closes using the visible control', async () => {
    await renderPage('/projects/cedar-and-light')
    fireEvent.click(screen.getByRole('button', { name: /^Open image 2 of/ }))
    const dialog = within(screen.getByRole('dialog'))
    expect(dialog.getByText(/^Image 2 of 3:/)).toBeVisible()
    fireEvent.error(dialog.getByRole('img'))
    expect(dialog.getByRole('img', { name: /^Reference photograph unavailable/ })).toBeVisible()
    const close = dialog.getByRole('button', { name: 'Close image gallery' })
    close.focus()
    fireEvent.keyDown(close, { key: 'Tab', shiftKey: true })
    expect(dialog.getByRole('button', { name: 'Next image' })).toHaveFocus()
    fireEvent.keyDown(document.activeElement, { key: 'Tab' })
    expect(close).toHaveFocus()
    fireEvent.click(close)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

describe('project links and FAQ', () => {
  it.each([0, 1, 11])('renders the right neighbours at index %s without boundary links', async index => {
    await renderPage('/projects/' + projects[index].slug)
    const navigation = within(screen.getByRole('navigation', { name: 'Project navigation' }))
    if (index > 0) expect(navigation.getByRole('link', { name: /^Previous project:/ })).toHaveAttribute('href', '/projects/' + projects[index - 1].slug)
    else expect(navigation.queryByRole('link', { name: /^Previous project:/ })).not.toBeInTheDocument()
    if (index < projects.length - 1) expect(navigation.getByRole('link', { name: /^Next project:/ })).toHaveAttribute('href', '/projects/' + projects[index + 1].slug)
    else expect(navigation.queryByRole('link', { name: /^Next project:/ })).not.toBeInTheDocument()
    const related = within(screen.getByRole('region', { name: 'Related concept studies' })).getAllByRole('link', { name: /^Explore / })
    expect(related).toHaveLength(3)
    for (const link of related.slice(0, 2)) expect(projects.find(project => '/projects/' + project.slug === link.getAttribute('href')).category).toBe(projects[index].category)
  })

  it('expands and collapses every existing FAQ with associated answer IDs', async () => {
    await renderPage('/services')
    for (const faq of faqs) {
      const question = screen.getByRole('button', { name: faq.question })
      const panel = document.getElementById(question.getAttribute('aria-controls'))
      expect(question).toHaveAttribute('aria-expanded', 'false')
      expect(panel).not.toBeVisible()
      fireEvent.click(question)
      expect(question).toHaveAttribute('aria-expanded', 'true')
      expect(panel).toHaveAttribute('aria-labelledby', question.id)
      expect(screen.getByText(faq.answer)).toBeVisible()
      fireEvent.click(question)
      expect(panel).not.toBeVisible()
    }
  })
})

describe('controlled local demo forms', () => {
  function fill(consultation = false) {
    fireEvent.change(screen.getByLabelText(/^Full name/), { target: { value: 'Demo Visitor' } })
    fireEvent.change(screen.getByLabelText(/^Email address/), { target: { value: 'demo@example.com' } })
    fireEvent.change(screen.getByLabelText(/^Project category/), { target: { value: 'residential' } })
    fireEvent.change(screen.getByLabelText(consultation ? /^Project brief/ : /^Message/), { target: { value: 'A fictional design brief.' } })
    fireEvent.click(screen.getByRole('checkbox'))
    if (consultation) {
      fireEvent.change(screen.getByLabelText(/^Preferred date/), { target: { value: vancouverToday() } })
      fireEvent.change(screen.getByLabelText(/^Preferred time window/), { target: { value: 'morning' } })
    }
  }

  it.each(['/contact', '/consultation'])('%s announces field errors, keeps input and focuses the first invalid field', async path => {
    await renderPage(path)
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getByRole('alert')).toHaveTextContent('Please check')
    expect(screen.getByLabelText(/^Full name/)).toHaveFocus()
    expect(screen.getByLabelText(/^Full name/)).toHaveAttribute('aria-invalid', 'true')
    fill(path === '/consultation')
    fireEvent.change(screen.getByLabelText(/^Email address/), { target: { value: 'invalid' } })
    fireEvent.submit(screen.getByRole('form'))
    const email = screen.getByLabelText(/^Email address/)
    expect(email).toHaveFocus()
    expect(document.getElementById(email.getAttribute('aria-describedby'))).toHaveTextContent('valid email')
    expect(screen.getByLabelText(/^Full name/)).toHaveValue('Demo Visitor')
    expect(screen.queryByText('Demo complete.')).not.toBeInTheDocument()
  })

  it.each(['/contact', '/consultation'])('%s completes once, sends/stores nothing and starts again empty', async path => {
    const fetch = vi.fn()
    vi.stubGlobal('fetch', fetch)
    const storage = vi.spyOn(Storage.prototype, 'setItem')
    const xhr = vi.spyOn(XMLHttpRequest.prototype, 'send')
    await renderPage(path)
    fill(path === '/consultation')
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    fireEvent.submit(form)
    expect(screen.getAllByText('Demo complete.')).toHaveLength(1)
    expect(screen.getByRole('status')).toHaveTextContent(path === '/consultation' ? 'This is a demo. No appointment has been booked.' : 'This is a demo. No message has been delivered.')
    expect(screen.queryByDisplayValue('Demo Visitor')).not.toBeInTheDocument()
    expect(fetch).not.toHaveBeenCalled()
    expect(storage).not.toHaveBeenCalled()
    expect(xhr).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button', { name: 'Start again' }))
    expect(screen.getByLabelText(/^Full name/)).toHaveValue('')
    expect(screen.getByLabelText(/^Full name/)).toHaveFocus()
    expect(screen.getByRole('checkbox')).not.toBeChecked()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('rejects past consultation preferences and requires acknowledgment', async () => {
    await renderPage('/consultation')
    fill(true)
    fireEvent.change(screen.getByLabelText(/^Preferred date/), { target: { value: '2000-01-01' } })
    fireEvent.click(screen.getByRole('checkbox'))
    fireEvent.submit(screen.getByRole('form'))
    expect(screen.getByText('Choose today or a future date in Vancouver.')).toBeVisible()
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(/^Preferred date/)).toHaveAttribute('min', vancouverToday())
    fireEvent.click(screen.getByRole('button', { name: 'Clear form' }))
    expect(screen.getByLabelText(/^Preferred date/)).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
