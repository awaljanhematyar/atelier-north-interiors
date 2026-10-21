import { publicPaths, renderMetadata, robotsTxt, routeMetadata, sitemapXml, siteOrigin } from '../src/utils/seo.js'
import { readFile, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'

export function seoBuildPlugin({ origin = '', index = false } = {}) {
  const config = { origin: siteOrigin(origin), index }
  if (index && !config.origin) throw new Error('INDEX_SITE=true requires the real SITE_URL.')
  const head = (html, path) => html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->/, `<!-- seo:start -->\n    ${renderMetadata(routeMetadata(path, config))}\n    <!-- seo:end -->`)
  return {
    name: 'atelier-static-metadata',
    enforce: 'post',
    transformIndexHtml(html) { return head(html, '/') },
    configurePreviewServer(server) {
      // Vite's SPA fallback otherwise serves the home head for nested requests.
      const folder = resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use(async (request, response, next) => {
        const path = new URL(request.url, 'http://localhost').pathname.replace(/\/$/, '') || '/'
        if (path === '/sitemap.xml' && !config.origin) {
          response.statusCode = 404
          response.setHeader('Content-Type', 'text/plain; charset=utf-8')
          response.end('Sitemap is not generated until SITE_URL is configured.')
          return
        }
        if (path.includes('.')) {
          // Delegate real assets, not nonexistent .html paths that Vite would
          // otherwise turn into a successful home-page response.
          let asset
          try { asset = resolve(folder, `.${decodeURIComponent(path)}`) } catch { /* Invalid paths use the noindex 404 below. */ }
          if (asset?.startsWith(folder + sep) && await stat(asset).then(file => file.isFile(), () => false)) return next()
        }
        const known = publicPaths.includes(path)
        const file = known ? path === '/' ? 'index.html' : `${path.slice(1)}/index.html` : '404.html'
        try {
          const html = await readFile(resolve(folder, file), 'utf8')
          response.statusCode = known ? 200 : 404
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.setHeader('Cache-Control', 'no-cache')
          response.end(html)
        } catch (error) { next(error) }
      })
    },
    generateBundle(_, bundle) {
      const template = bundle['index.html']?.source
      if (typeof template !== 'string') throw new Error('Vite index.html is missing.')
      for (const path of publicPaths.filter(path => path !== '/')) this.emitFile({ type: 'asset', fileName: `${path.slice(1)}/index.html`, source: head(template, path) })
      this.emitFile({ type: 'asset', fileName: '404.html', source: head(template, '/not-found') })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robotsTxt(config) })
      if (config.origin) this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemapXml(config.origin) })
    },
  }
}
