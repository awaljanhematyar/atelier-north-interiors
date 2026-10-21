import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects.js'
import { publicPaths, renderMetadata, robotsTxt, routeMetadata, sitemapXml, siteOrigin } from './seo.js'
import { seoBuildPlugin } from '../../scripts/seo-build.js'
import deployment from '../../vercel.json'

describe('route metadata and publication safety', () => {
  it('provides unique titles and descriptions for all nineteen real routes', () => {
    const metadata = publicPaths.map(path => routeMetadata(path))
    expect(publicPaths).toHaveLength(19)
    expect(new Set(metadata.map(meta => meta.title)).size).toBe(19)
    expect(new Set(metadata.map(meta => meta.description)).size).toBe(19)
    for (const meta of metadata) {
      expect(meta.known).toBe(true)
      expect(meta.robots).toBe('noindex, nofollow')
      expect(meta.canonical).toBe('')
      expect(meta.description).toMatch(/fictional|demo|illustrative/i)
    }
  })
  it.each(projects)('identifies $slug as a fictional concept with its own image and narrative', project => {
    const meta = routeMetadata(`/projects/${project.slug}`, { origin: 'https://portfolio.example', index: true })
    expect(meta.title).toContain(project.title)
    expect(meta.description).toContain(project.description)
    expect(meta.description).toContain('fictional')
    expect(meta.image).toBe('https://portfolio.example' + project.images[0].src)
    expect(meta.canonical).toBe('https://portfolio.example/projects/' + project.slug)
    expect(meta.robots).toBe('index, follow')
  })
  it('never indexes unknown paths, even in an indexable build', () => {
    for (const path of ['/missing', '/projects/missing']) {
      const meta = routeMetadata(path, { origin: 'https://portfolio.example', index: true })
      expect(meta.known).toBe(false)
      expect(meta.robots).toBe('noindex, nofollow')
      expect(meta.canonical).toBe('')
    }
    expect(routeMetadata('/projects/').path).toBe('/projects')
  })
  it.each(['http://portfolio.example', 'https://' + 'user:password' + '@portfolio.example', 'https://portfolio.example/path', 'https://portfolio.example/?query=1', 'javascript:alert(1)'])('rejects an unsafe or non-origin SITE_URL: %s', value => {
    expect(() => siteOrigin(value)).toThrow()
  })
  it('escapes HTML metadata and includes meaningful crawler-visible social tags', () => {
    const html = renderMetadata({ ...routeMetadata('/projects/cedar-and-light'), title: '<script>"&' })
    expect(html).toContain('&lt;script&gt;&quot;&amp;')
    expect(html).not.toContain('<script>')
    expect(html).toContain('property="og:type" content="website"')
    expect(html).toContain('name="twitter:card" content="summary_large_image"')
    expect(html).toContain('property="og:image:alt"')
    expect(html).toContain('imagesrcset=')
    expect(html).not.toContain('application/ld+json')
  })
})

describe('static head, robots and sitemap generation', () => {
  it('maps only valid nested paths and leaves unknown routes to the static 404', () => {
    expect(deployment.rewrites).toEqual(publicPaths.filter(path => path !== '/').map(path => ({ source: path, destination: path + '/index.html' })))
    expect(deployment.rewrites.some(rule => rule.source === '/(.*)')).toBe(false)
    expect(deployment.headers.find(rule => rule.source.startsWith('/assets/')).headers[0].value).toContain('immutable')
  })
  it('requires a real origin for a sitemap and includes exactly the valid public paths', () => {
    expect(() => sitemapXml('')).toThrow()
    const xml = sitemapXml('https://portfolio.example')
    const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
    expect(locations).toEqual(publicPaths.map(path => 'https://portfolio.example' + path))
    expect(xml).not.toContain('404')
    expect(robotsTxt()).toBe('User-agent: *\nDisallow: /\n')
    expect(robotsTxt({ origin: 'https://portfolio.example', index: true })).toContain('Sitemap: https://portfolio.example/sitemap.xml')
    expect(() => seoBuildPlugin({ index: true })).toThrow()
  })
  it('emits route-specific static head tags without a framework or placeholder hostname', () => {
    const plugin = seoBuildPlugin()
    const template = '<html><head><!-- seo:start --><!-- seo:end --></head><body><div id="root"></div></body></html>'
    const files = []
    plugin.generateBundle.call({ emitFile: file => files.push(file) }, {}, { 'index.html': { source: template } })
    expect(files).toHaveLength(20)
    expect(files.some(file => file.fileName === 'sitemap.xml')).toBe(false)
    expect(files.find(file => file.fileName === 'projects/cedar-and-light/index.html').source).toContain('Cedar &amp; Light')
    expect(files.find(file => file.fileName === '404.html').source).toContain('noindex, nofollow')
    expect(files.find(file => file.fileName === 'robots.txt').source).toContain('Disallow: /')
    expect(plugin.transformIndexHtml(template)).toContain('Spaces That Tell Your Story')
  })
})
