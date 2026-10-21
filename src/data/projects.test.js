import { readFileSync } from 'node:fs'
import { URL as NodeURL } from 'node:url'
import { describe, expect, it } from 'vitest'
import { categories, getProject, projects } from './projects.js'

describe('fictional project content', () => {
  it('has twelve uniquely addressable projects, three in each category', () => {
    expect(projects).toHaveLength(12)
    expect(new Set(projects.map(project => project.slug)).size).toBe(12)
    for (const category of categories) expect(projects.filter(project => project.category === category.id)).toHaveLength(3)
  })

  it.each(projects)('$slug has a complete brief and three licensed local reference images', project => {
    expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    expect(getProject(project.slug)).toBe(project)
    expect(project.fictional).toBe(true)
    for (const field of ['title', 'location', 'description', 'concept']) expect(project[field].length).toBeGreaterThan(8)
    expect(project.location).toContain('imagined')
    expect(project.scope.length).toBeGreaterThanOrEqual(3)
    expect(project.materials.length).toBeGreaterThanOrEqual(3)
    expect(project.images).toHaveLength(3)
    expect(new Set(project.images.map(image => image.id)).size).toBe(3)
    for (const image of project.images) {
      expect(image.alt.length).toBeGreaterThan(25)
      expect(image.photographer).toBeTruthy()
      expect(image.source).toMatch(/^https:\/\/www\.pexels\.com\/photo\//)
      expect(image.license).toBe('https://www.pexels.com/license/')
      for (const width of [640, 1600]) {
        const path = `/images/${image.id}-${width}.webp`
        expect(image.srcSet).toContain(`${path} ${width}w`)
        const file = readFileSync(new NodeURL(`../../public${path}`, import.meta.url))
        expect(file.subarray(0, 4).toString()).toBe('RIFF')
        expect(file.subarray(8, 12).toString()).toBe('WEBP')
      }
    }
  })

  it('returns no project for an unknown slug', () => {
    expect(getProject('not-a-project')).toBeUndefined()
  })
})
