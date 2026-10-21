import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, it, vi } from 'vitest'
import App from '../App.jsx'
import Photo from '../components/ui/Photo.jsx'
import { projects } from '../data/projects.js'
import PageLoadBoundary from '../components/layout/PageLoadBoundary.jsx'
import ProjectCard from '../components/features/ProjectCard.jsx'
import ProjectNavigation from '../components/features/ProjectNavigation.jsx'
import { responsiveSources } from '../utils/images.js'
import { routeMetadata, renderMetadata } from '../utils/seo.js'

it('includes every visible card label in its accessible name', () => {
  render(<MemoryRouter><ProjectCard project={projects[0]} /></MemoryRouter>)
  const card = screen.getByRole('link', { name: 'Explore Residential / Concept study Cedar & Light Alder Quay · imagined Vancouver setting' })
  expect(card).toHaveAttribute('href', '/projects/cedar-and-light')
  expect(card).toHaveTextContent('Residential / Concept study Cedar & Light Alder Quay · imagined Vancouver setting')
})

it('keeps the optimized portrait candidates consistent between images and preload hints', () => {
  const image = projects.flatMap(project => project.images).find(image => image.id === '28450649')
  render(<Photo image={image} />)
  expect(screen.getByRole('img')).toHaveAttribute('srcset', responsiveSources(image))
  expect(responsiveSources(image)).toContain('/images/optimized/28450649-960.webp 960w')
  expect(renderMetadata(routeMetadata('/projects/gather-house'))).toContain(responsiveSources(image))
})

it('separates project-navigation labels from their visible project titles', () => {
  render(<MemoryRouter><ProjectNavigation projects={projects} slug={projects[1].slug} /></MemoryRouter>)
  expect(screen.getByRole('link', { name: `Previous project: ${projects[0].title}` })).toHaveTextContent(`Previous Project ${projects[0].title}`)
  expect(screen.getByRole('link', { name: `Next project: ${projects[2].title}` })).toHaveTextContent(`Next Project ${projects[2].title}`)
})

it('offers a reload recovery link if a lazy page fails', () => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
  function FailedPage() { throw new Error('Simulated chunk load failure') }
  render(<PageLoadBoundary path="/services"><FailedPage /></PageLoadBoundary>)
  expect(screen.getByRole('heading', { name: 'This page couldn’t load.' })).toBeVisible()
  expect(screen.getByRole('link', { name: 'Reload page' })).toHaveAttribute('href', '/services')
})

it('updates project metadata after client navigation', async () => {
  render(<MemoryRouter initialEntries={['/projects/cedar-and-light']}><App /></MemoryRouter>)
  await screen.findByRole('heading', { level: 1, name: 'Cedar & Light' })
  await waitFor(() => expect(document.querySelector('meta[name="description"]')?.content).toContain('Cedar & Light'))
  expect(document.querySelector('meta[property="og:title"]').content).toBe(document.title)
  expect(document.querySelector('meta[name="twitter:image"]').content).toContain(projects[0].images[0].src)
  fireEvent.click(screen.getByRole('link', { name: 'Next project: The Reading Room' }))
  await screen.findByRole('heading', { level: 1, name: 'The Reading Room' })
  await waitFor(() => expect(document.querySelector('meta[name="description"]')?.content).toContain('The Reading Room'))
})

it('removes stale indexing metadata when an invalid route renders', async () => {
  const canonical = document.createElement('link'); canonical.rel = 'canonical'; canonical.href = 'https://portfolio.example/stale'; document.head.append(canonical)
  render(<MemoryRouter initialEntries={['/projects/not-a-concept']}><App /></MemoryRouter>)
  await screen.findByRole('heading', { level: 1, name: 'A space yet to be found.' })
  expect(document.querySelector('meta[name="robots"]').content).toBe('noindex, nofollow')
  expect(document.querySelector('link[rel="canonical"]')).toBeNull()
  expect(document.querySelector('meta[name="description"]').content).toContain('unavailable')
})

it('keeps hero priority and responsive sources while lazy-loading supporting images', () => {
  const image = projects[0].images[0]
  const view = render(<Photo image={image} priority />)
  expect(screen.getByRole('img')).toHaveAttribute('loading', 'eager')
  expect(screen.getByRole('img')).toHaveAttribute('fetchpriority', 'high')
  expect(screen.getByRole('img')).toHaveAttribute('srcset', image.srcSet)
  view.rerender(<Photo image={image} />)
  expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy')
  expect(screen.getByRole('img')).toHaveAttribute('fetchpriority', 'auto')
})
