import { Suspense, useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PageLoadBoundary from './PageLoadBoundary.jsx'

export default function AppLayout() {
  const location = useLocation()
  const previousLocation = useRef(location.pathname)
  const mainRef = useRef(null)

  useEffect(() => {
    if (previousLocation.current !== location.pathname) {
      mainRef.current?.focus()
      window.scrollTo({ top: 0, behavior: 'instant' })
      previousLocation.current = location.pathname
    }
  }, [location.pathname])

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link" onClick={() => mainRef.current?.focus()}>Skip to content</a>
      <Header key={location.key} />
      <main id="main-content" tabIndex={-1} ref={mainRef}><PageLoadBoundary key={location.pathname} path={location.pathname}><Suspense fallback={<div className="site-container section-space min-h-[60vh]" role="status">Loading page…</div>}><Outlet /></Suspense></PageLoadBoundary></main>
      <Footer />
    </div>
  )
}
