import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { testimonials } from '../data/studio.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function TestimonialsPage() {
  usePageTitle('Testimonials')
  return <><PageHeader eyebrow="Illustrative perspectives" title="Testimonials" description="A demonstration of how client perspectives could be presented, with space for the words to speak for themselves." /><Container><aside className="disclosure-panel"><h2 className="eyebrow">Fictional examples, clearly stated</h2><p>Every quotation below was written for this portfolio. These are not verified customer reviews and do not describe real client experiences. No ratings or endorsements are claimed.</p></aside><section className="testimonial-list section-space" aria-label="Fictional testimonial examples">{testimonials.map((item, index) => <figure key={item.id}><div><span className="eyebrow">0{index + 1} / {item.perspective}</span><span className="sample-label">Fictional example</span></div><blockquote><p>“{item.quote}”</p></blockquote><figcaption>{item.attribution} · Written for this demonstration</figcaption></figure>)}</section></Container><ConsultationCTA /></>
}
