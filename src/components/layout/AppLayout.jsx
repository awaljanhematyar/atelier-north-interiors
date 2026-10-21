import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

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
      <main id="main-content" tabIndex={-1} ref={mainRef}><Outlet /></main>
      <Footer />
    </div>
  )
}
