import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { navigation } from '../../data/navigation.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Brand from './Brand.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeOnDesktop = () => setOpen(false)
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function handleKeyDown(event) {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      setOpen(false)
      toggleRef.current?.focus()
    }
  }

  function closeMenu() { setOpen(false) }

  return (
    <header className="site-header" onKeyDown={handleKeyDown} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenu()
    }}>
      <Container>
        <div className="header-row">
          <Brand onClick={closeMenu} />
          <nav aria-label="Primary" className="desktop-navigation">
            <ul className="flex items-center gap-6">
              {navigation.map(({ to, label }) => <li key={to}><NavLink className="nav-link" to={to}>{label}</NavLink></li>)}
            </ul>
          </nav>
          <Button to="/consultation" className="desktop-consultation" variant="outline">Consultation <ArrowUpRight size={15} aria-hidden="true" /></Button>
          <button ref={toggleRef} type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Menu — Open navigation'} onClick={() => setOpen(!open)}>
            <span>{open ? 'Close' : 'Menu'}</span>
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile" className="mobile-navigation" hidden={!open}>
          <ul>
            <li><NavLink to="/" end className="mobile-link" onClick={closeMenu}>Home</NavLink></li>
            {navigation.map(({ to, label }) => <li key={to}><NavLink className="mobile-link" to={to} onClick={closeMenu}>{label}</NavLink></li>)}
          </ul>
          <Button to="/consultation" className="mt-6 w-full" onClick={closeMenu}>Consultation <ArrowUpRight size={16} aria-hidden="true" /></Button>
          <p className="mt-5 text-xs leading-6">Fictional studio · Portfolio demonstration</p>
        </nav>
      </Container>
    </header>
  )
}
