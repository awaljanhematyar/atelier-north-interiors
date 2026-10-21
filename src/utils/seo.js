import { projects } from '../data/projects.js'
import { responsiveSources } from './images.js'

const brand = 'Atelier North Interiors'
const pages = [
  ['/', 'Spaces That Tell Your Story', 'Explore a fictional Vancouver interior design studio portfolio: considered spaces, natural materials and twelve clearly labelled concept studies.'],
  ['/projects', 'Projects', 'Browse twelve fictional residential, commercial, hospitality and renovation concepts with illustrative reference photography.'],
  ['/services', 'Services', 'Explore illustrative interior design services and a considered design process from Atelier North, a fictional portfolio studio.'],
  ['/about', 'About Atelier North', 'Discover the story, values and material-led approach behind Atelier North, a fictional Vancouver interior design portfolio.'],
  ['/testimonials', 'Testimonials', 'View clearly labelled fictional testimonial examples created for this portfolio. These are not verified customer reviews.'],
  ['/contact', 'Contact', 'Try a local-only enquiry demo for the fictional Atelier North portfolio. No message is delivered and no personal details are stored.'],
  ['/consultation', 'Consultation', 'Explore a Vancouver-time consultation request demo. No availability, appointment, email delivery or real booking is offered.'],
]

export const publicPaths = [...pages.map(([path]) => path), ...projects.map(project => `/projects/${project.slug}`)]

export function siteOrigin(value = '') {
  if (!value) return ''
  const url = new URL(value)
  if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('SITE_URL must be an HTTPS origin without a path, credentials, query or fragment.')
  return url.origin
}

export function routeMetadata(pathname, { origin = '', index = false } = {}) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  const page = pages.find(([key]) => key === path)
  const project = projects.find(item => `/projects/${item.slug}` === path)
  const known = Boolean(page || project)
  const title = project ? project.title : page?.[1] ?? 'Page not found'
  const description = project ? `${project.title}: a fictional ${project.category} interior concept. ${project.description}` : page?.[2] ?? 'This page is unavailable. Explore the fictional Atelier North portfolio and its concept studies instead.'
  const base = siteOrigin(origin)
  const photo = project?.images?.[0] ?? projects[0].images[0]
  return {
    path, known, title: `${title} | ${brand}`, description,
    robots: known && index && base ? 'index, follow' : 'noindex, nofollow',
    canonical: known && base ? `${base}${path}` : '',
    image: `${base}${photo.src}`, imageAlt: `Illustrative stock reference, not studio work: ${photo.alt}`,
    hero: path === '/' || project ? { ...photo, srcSet: responsiveSources(photo) } : null,
  }
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
}

export function renderMetadata(meta) {
  const tag = (key, value, property = false) => `<meta ${property ? 'property' : 'name'}="${key}" content="${escapeHtml(value)}" />`
  return [
    `<title>${escapeHtml(meta.title)}</title>`, tag('description', meta.description), tag('robots', meta.robots),
    tag('og:title', meta.title, true), tag('og:description', meta.description, true), tag('og:type', 'website', true),
    tag('og:site_name', brand, true), tag('og:locale', 'en_CA', true), tag('og:image', meta.image, true),
    tag('og:image:alt', meta.imageAlt, true), tag('og:image:type', 'image/webp', true),
    tag('twitter:card', 'summary_large_image'), tag('twitter:title', meta.title), tag('twitter:description', meta.description),
    tag('twitter:image', meta.image), tag('twitter:image:alt', meta.imageAlt),
    ...(meta.canonical ? [`<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`, tag('og:url', meta.canonical, true)] : []),
    ...(meta.hero ? [`<link rel="preload" as="image" href="${meta.hero.src}" imagesrcset="${meta.hero.srcSet}" imagesizes="${meta.path === '/' ? '(min-width: 1280px) 1152px, 100vw' : '100vw'}" fetchpriority="high" />`] : []),
  ].join('\n    ')
}

export function sitemapXml(origin) {
  const base = siteOrigin(origin)
  if (!base) throw new Error('A real SITE_URL is required to generate sitemap.xml.')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicPaths.map(path => `  <url><loc>${escapeHtml(base + path)}</loc></url>`).join('\n')}\n</urlset>\n`
}

export function robotsTxt({ origin = '', index = false } = {}) {
  const base = siteOrigin(origin)
  return index && base ? `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n'
}
