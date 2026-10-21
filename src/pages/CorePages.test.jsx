import { fireEvent, render, screen, within, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App.jsx'
import { projects } from '../data/projects.js'
import Photo from '../components/ui/Photo.jsx'

async function renderPage(path) { const view = render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>); await waitFor(() => expect(screen.queryByText('Loading page…')).not.toBeInTheDocument()); await screen.findByRole('heading', { level: 1 }); return view }

describe('Phase 2 content and core pages', () => {
  it.each(projects)('renders the complete detail for $title', async project => {
    await renderPage(`/projects/${project.slug}`)
    expect(await screen.findByRole('heading', { level: 1, name: project.title })).toBeVisible()
    expect(screen.getByText(project.description)).toBeVisible()
    expect(screen.getByText(project.concept)).toBeVisible()
    expect(await screen.findByRole('heading', { name: 'Proposed scope' })).toBeVisible()
    for (const material of project.materials) expect(screen.getByText(material)).toBeVisible()
    expect(await screen.findByRole('heading', { name: 'Related concept studies' })).toBeVisible()
    expect(screen.getByText(/not views of a single real project/)).toBeVisible()
  })

  it('handles invalid project slugs with real recovery links', async () => {
    await renderPage('/projects/unknown-concept')
    expect(await screen.findByRole('heading', { level: 1, name: 'A space yet to be found.' })).toBeVisible()
    fireEvent.click(screen.getByRole('link', { name: 'Explore projects' }))
    expect(await screen.findByRole('heading', { level: 1, name: 'Projects' })).toBeVisible()
  })

  it('links the twelve portfolio cards to their detail pages', async () => {
    await renderPage('/projects')
    for (const project of projects) expect(screen.getByRole('link', { name: name => name.includes(project.title) })).toHaveAttribute('href', `/projects/${project.slug}`)
    fireEvent.click(screen.getByRole('link', { name: 'Explore Residential / Concept study Cedar & Light Alder Quay · imagined Vancouver setting' }))
    expect(await screen.findByRole('heading', { level: 1, name: 'Cedar & Light' })).toBeVisible()
    expect(screen.getByRole('main')).toHaveFocus()
  })

  it('presents accessible service FAQs and clear fictional testimonials', async () => {
    const view = await renderPage('/services')
    expect(await screen.findByRole('heading', { name: 'Residential Interior Design' })).toBeVisible()
    expect(await screen.findByRole('heading', { name: 'Is Atelier North a real design practice?' })).toBeVisible()
    const question = screen.getByRole('button', { name: 'Is Atelier North a real design practice?' })
    expect(question).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(question)
    expect(question).toHaveAttribute('aria-expanded', 'true')
    view.unmount()
    await renderPage('/testimonials')
    expect(screen.getAllByText('Fictional example')).toHaveLength(3)
    expect(screen.getByText(/not verified customer reviews/)).toBeVisible()
  })

  it.each(['/contact', '/consultation'])('%s has labelled demo fields and transparent local-only submission', async path => {
    await renderPage(path)
    const form = within(screen.getByRole('form'))
    for (const name of [/^Full name/, /^Email/, /^Project category/]) expect(form.getByLabelText(name)).toBeEnabled()
    expect(form.getByRole('checkbox')).toBeRequired()
    expect(form.getByRole('checkbox')).toBeEnabled()
    expect(form.getByRole('button', { name: /Try the/ })).toBeEnabled()
    expect(screen.getByText(/Nothing is stored or sent/)).toBeVisible()
    if (path === '/consultation') {
      expect(form.getByLabelText(/^Preferred date/)).toBeEnabled()
      expect(form.getByLabelText(/^Preferred time window/)).toBeEnabled()
      expect(form.getByLabelText(/^Project brief/)).toBeEnabled()
      expect(screen.getByText(/America\/Vancouver/)).toBeVisible()
    } else expect(form.getByLabelText(/^Message/)).toBeEnabled()
  })

  it('replaces failed photos accessibly and recovers when a different source is rendered', async () => {
    const image = projects[0].images[0]
    const view = render(<Photo image={image} />)
    fireEvent.error(screen.getByRole('img'))
    expect(screen.getByRole('img', { name: `Reference photograph unavailable: ${image.alt}` })).toBeVisible()
    expect(screen.queryByAltText(image.alt)).not.toBeInTheDocument()
    view.rerender(<Photo image={projects[1].images[0]} />)
    expect(screen.getByAltText(projects[1].images[0].alt)).toHaveAttribute('src', projects[1].images[0].src)
  })
})
