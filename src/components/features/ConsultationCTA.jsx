import { ArrowUpRight } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'

export default function ConsultationCTA() {
  return <section className="consultation-cta" aria-labelledby="consultation-cta-title"><Container className="cta-inner"><div><p className="eyebrow">A considered first step</p><h2 id="consultation-cta-title">Every space begins{' '}<br />with a conversation.</h2><p>Explore how an initial design conversation could take shape.</p></div><div><Button to="/consultation">Explore consultation <ArrowUpRight size={16} aria-hidden="true" /></Button><p className="mt-3 text-xs">Portfolio demo · No real bookings</p></div></Container></section>
}
