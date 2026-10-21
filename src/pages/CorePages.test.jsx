import { fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App.jsx'
import { projects } from '../data/projects.js'
import Photo from '../components/ui/Photo.jsx'

function renderPage(path) { return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>) }

describe('Phase 2 content and core pages', () => {
  it.each(projects)('renders the complete detail for $title', project => {
    renderPage(`/projects/${project.slug}`)
    expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeVisible()
    expect(screen.getByText(project.description)).toBeVisible()
    expect(screen.getByText(project.concept)).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Proposed scope' })).toBeVisible()
    for (const material of project.materials) expect(screen.getByText(material)).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Related concept studies' })).toBeVisible()
    expect(screen.getByText(/not views of a single real project/)).toBeVisible()
  })

  it('handles invalid project slugs with real recovery links', () => {
    renderPage('/projects/unknown-concept')
    expect(screen.getByRole('heading', { level: 1, name: 'A space yet to be found.' })).toBeVisible()
    fireEvent.click(screen.getByRole('link', { name: 'Explore projects' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Projects' })).toBeVisible()
  })

  it('links the twelve portfolio cards to their detail pages', () => {
    renderPage('/projects')
    for (const project of projects) expect(screen.getByRole('link', { name: `Explore ${project.title}` })).toHaveAttribute('href', `/projects/${project.slug}`)
    fireEvent.click(screen.getByRole('link', { name: 'Explore Cedar & Light' }))
    expect(screen.getByRole('heading', { level: 1, name: 'Cedar & Light' })).toBeVisible()
    expect(screen.getByRole('main')).toHaveFocus()
  })

  it('presents static service FAQs and clear fictional testimonials', () => {
    const view = renderPage('/services')
    expect(screen.getByRole('heading', { name: 'Residential Interior Design' })).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Is Atelier North a real design practice?' })).toBeVisible()
    expect(within(screen.getByRole('region', { name: 'Before we begin.' })).queryByRole('button')).not.toBeInTheDocument()
    view.unmount()
    renderPage('/testimonials')
    expect(screen.getAllByText('Fictional example')).toHaveLength(3)
    expect(screen.getByText(/not verified customer reviews/)).toBeVisible()
  })

  it.each(['/contact', '/consultation'])('%s has labelled, disabled demo fields and no working submission', path => {
    renderPage(path)
    const form = within(screen.getByRole('form'))
    for (const name of [/^Name/, /^Email/, /^Project category/]) expect(form.getByLabelText(name)).toBeDisabled()
    expect(form.getByRole('checkbox')).toBeRequired()
    expect(form.getByRole('checkbox')).toBeDisabled()
    expect(form.getByRole('button')).toBeDisabled()
    expect(screen.getByText(/Nothing is collected, stored or sent/)).toBeVisible()
    if (path === '/consultation') {
      expect(form.getByLabelText(/^Preferred date/)).toBeDisabled()
      expect(form.getByLabelText(/^Preferred time window/)).toBeDisabled()
      expect(form.getByLabelText(/^Project brief/)).toBeDisabled()
      expect(screen.getByText(/America\/Vancouver/)).toBeVisible()
    } else expect(form.getByLabelText(/^Message/)).toBeDisabled()
  })

  it('replaces failed photos accessibly and recovers when a different source is rendered', () => {
    const image = projects[0].images[0]
    const view = render(<Photo image={image} />)
    fireEvent.error(screen.getByRole('img'))
    expect(screen.getByRole('img', { name: `Reference photograph unavailable: ${image.alt}` })).toBeVisible()
    expect(screen.queryByAltText(image.alt)).not.toBeInTheDocument()
    view.rerender(<Photo image={projects[1].images[0]} />)
    expect(screen.getByAltText(projects[1].images[0].alt)).toHaveAttribute('src', projects[1].images[0].src)
  })
})
