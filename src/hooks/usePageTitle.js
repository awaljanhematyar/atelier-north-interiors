import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMetadata } from '../utils/seo.js'

export default function usePageTitle(title) {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = routeMetadata(pathname, { origin: import.meta.env.VITE_SITE_URL, index: import.meta.env.VITE_INDEX_SITE === 'true' })
    document.title = `${title} | Atelier North Interiors`
    const setMeta = (key, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.append(element) }
      element.content = content
    }
    setMeta('description', meta.description)
    setMeta('robots', meta.robots)
    for (const [key, value] of Object.entries({ title: document.title, description: meta.description, type: 'website', image: meta.image, 'image:alt': meta.imageAlt })) setMeta(`og:${key}`, value, true)
    for (const [key, value] of Object.entries({ card: 'summary_large_image', title: document.title, description: meta.description, image: meta.image, 'image:alt': meta.imageAlt })) setMeta(`twitter:${key}`, value)
    document.head.querySelector('link[rel="canonical"]')?.remove()
    document.head.querySelector('meta[property="og:url"]')?.remove()
    if (meta.canonical) {
      const link = document.createElement('link'); link.rel = 'canonical'; link.href = meta.canonical; document.head.append(link)
      setMeta('og:url', meta.canonical, true)
    }
    // Build-time image hints apply only to the document's initial route.
    document.head.querySelectorAll('link[rel="preload"][as="image"]').forEach(link => link.remove())
  }, [title, pathname])
}
