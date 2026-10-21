import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import App from '../App.jsx'
import * as projectData from '../data/projects.js'
import ProjectCard from '../components/features/ProjectCard.jsx'
import GalleryDialog from '../components/features/GalleryDialog.jsx'
import Photo, { ImageCredit } from '../components/ui/Photo.jsx'

const renderPage = path => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>)

describe('missing project and image data', () => {
  it('renders incomplete detail data without crashing or creating broken gallery controls', () => {
    vi.spyOn(projectData, 'getProject').mockReturnValue({ slug: 'incomplete', images: [], scope: null, materials: 'invalid' })
    renderPage('/projects/incomplete')
    expect(screen.getByRole('heading', { level: 1, name: 'Untitled concept' })).toBeVisible()
    expect(screen.getByText('Scope details are unavailable for this concept.')).toBeVisible()
    expect(screen.getByText('Material details are unavailable for this concept.')).toBeVisible()
    expect(screen.getByRole('img', { name: /No image provided/ })).toBeVisible()
    expect(screen.queryByRole('button', { name: /^Open image/ })).not.toBeInTheDocument()
  })

  it('keeps incomplete cards usable and rejects unsafe or absent slugs', () => {
    const view = render(<MemoryRouter><ProjectCard project={{ slug: 'incomplete' }} /></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'Explore Untitled concept' })).toHaveAttribute('href', '/projects/incomplete')
    expect(screen.getByRole('img', { name: /No image provided/ })).toBeVisible()
    view.rerender(<MemoryRouter><ProjectCard project={{ slug: '../contact' }} /><ProjectCard /></MemoryRouter>)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('supplies missing alt text and omits absent or unsafe credit links', () => {
    render(<><Photo image={{ src: '/images/example.webp' }} /><ImageCredit /><ImageCredit image={{ source: 'javascript:alert(1)', photographer: 'Sample' }} /></>)
    expect(screen.getByRole('img', { name: 'Illustrative interior reference photograph' })).toBeVisible()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('clamps a gallery selection when its images shrink and handles an empty gallery', () => {
    const images = projectData.projects[0].images
    const onClose = vi.fn()
    const view = render(<GalleryDialog images={images} initialIndex={2} onClose={onClose} />)
    expect(screen.getByText(/^Image 3 of 3:/)).toBeVisible()
    view.rerender(<GalleryDialog images={[images[0]]} onClose={onClose} />)
    expect(screen.getByText(/^Image 1 of 1:/)).toBeVisible()
    expect(screen.getByRole('button', { name: 'Next image' })).toBeDisabled()
    view.rerender(<GalleryDialog images={[]} onClose={onClose} />)
    expect(screen.getByRole('status')).toHaveTextContent('No reference images')
    const close = screen.getByRole('button', { name: 'Close image gallery' })
    close.focus()
    fireEvent.keyDown(close, { key: 'Tab', shiftKey: true })
    expect(close).toHaveFocus()
    fireEvent.keyDown(close, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledOnce()
  })
})

describe('form length boundaries and reset', () => {
  it.each(['/contact', '/consultation'])('%s rejects oversized input, preserves it and resets all feedback', path => {
    renderPage(path)
    const name = screen.getByLabelText(/^Full name/)
    const message = screen.getByLabelText(path === '/contact' ? /^Message/ : /^Project brief/)
    fireEvent.change(name, { target: { value: 'N'.repeat(121) } })
    fireEvent.change(message, { target: { value: 'M'.repeat(5001) } })
    fireEvent.submit(screen.getByRole('form'))
    expect(name).toHaveFocus()
    expect(name).toHaveValue('N'.repeat(121))
    expect(document.getElementById(name.getAttribute('aria-describedby'))).toHaveTextContent('120 characters')
    expect(document.getElementById(message.getAttribute('aria-describedby'))).toHaveTextContent('5,000 characters')
    expect(screen.getByRole('alert')).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Clear form' }))
    expect(name).toHaveFocus()
    expect(name).toHaveValue('')
    expect(message).toHaveValue('')
    expect(name).not.toHaveAttribute('aria-invalid')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(within(screen.getByRole('form')).getByRole('checkbox')).not.toBeChecked()
  })
})
