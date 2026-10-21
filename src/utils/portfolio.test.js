import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects.js'
import { filterProjects, projectNeighbours, relatedProjects } from './portfolio.js'

describe('portfolio selection and ordering', () => {
  it('handles missing collections and rejects empty or path-like slugs', () => {
    expect(filterProjects(null)).toEqual([])
    expect(filterProjects([{ slug: '' }, { slug: '../contact' }, { slug: 'valid-concept' }])).toEqual([{ slug: 'valid-concept' }])
    expect(projectNeighbours(undefined, 'missing')).toEqual({ previous: null, next: null })
    expect(relatedProjects(null, projects[0])).toEqual([])
  })
  it('filters without mutating data and handles empty or invalid records', () => {
    expect(filterProjects(projects)).toHaveLength(12)
    expect(filterProjects(projects, 'unknown')).toEqual([])
    expect(filterProjects([null, {}])).toEqual([])
    expect(filterProjects([], 'residential')).toEqual([])
    expect(projects).toHaveLength(12)
  })
  it('handles both navigation boundaries and unknown slugs', () => {
    expect(projectNeighbours(projects, projects[0].slug)).toEqual({ previous: null, next: projects[1] })
    expect(projectNeighbours(projects, projects.at(-1).slug)).toEqual({ previous: projects.at(-2), next: null })
    expect(projectNeighbours(projects, 'missing')).toEqual({ previous: null, next: null })
    for (let i = 1; i < projects.length - 1; i++) expect(projectNeighbours(projects, projects[i].slug)).toEqual({ previous: projects[i - 1], next: projects[i + 1] })
  })
  it('prioritizes same-category related projects and then fills in source order', () => {
    const related = relatedProjects(projects, projects[0])
    expect(related.slice(0, 2)).toEqual(projects.slice(1, 3))
    expect(related[2]).toBe(projects[3])
    expect(related).not.toContain(projects[0])
    expect(relatedProjects([], projects[0])).toEqual([])
  })
})
