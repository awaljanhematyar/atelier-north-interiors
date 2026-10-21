import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { navigation } from '../../data/navigation.js'
import Container from '../ui/Container.jsx'
import Brand from './Brand.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div><Brand /><p className="footer-tagline">Spaces That Tell Your Story.</p></div>
          <nav aria-label="Footer"><ul className="footer-links">
            {navigation.map(({ to, label }) => <li key={to}><Link to={to}>{label}</Link></li>)}
            <li><Link to="/consultation">Consultation <ArrowUpRight size={13} aria-hidden="true" /></Link></li>
          </ul></nav>
        </div>
        <div className="footer-bottom">
          <p>Atelier North Interiors is a fictional portfolio demonstration. No real client services or bookings are offered.</p>
          <span>Vancouver, British Columbia</span>
        </div>
      </Container>
    </footer>
  )
}
