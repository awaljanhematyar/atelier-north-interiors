import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Photo, { ImageCredit } from '../components/ui/Photo.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { services, process, faqs } from '../data/studio.js'
import { projects } from '../data/projects.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function ServicesPage() {
  usePageTitle('Services')
  const image = projects[9].images[0]
  return <><PageHeader eyebrow="Thoughtful by design" title="Services" description="From a single room to a place of gathering, the starting point is the same: understand what a space needs to do, then give it room to breathe." /><Container><p className="demo-note mt-8">Illustrative service offering for a fictional studio. No real commissions are accepted.</p><section className="service-list section-space" aria-label="Design services">{services.map((service, index) => <article key={service.id} id={service.id}><span className="eyebrow">0{index + 1}</span><h2>{service.title}</h2><div><p>{service.description}</p><p className="service-scope">{service.scope}</p></div></article>)}</section><figure><Photo image={image} className="wide-photo" sizes="100vw" /><figcaption><ImageCredit image={image} /></figcaption></figure><section className="section-space" aria-labelledby="process-title"><SectionHeading eyebrow="From first thought to a clear direction" id="process-title">A collaborative process.</SectionHeading><div className="process-grid">{process.map((step, i) => <article key={step.title}><span className="eyebrow">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section><section className="faq-section section-space section-border" aria-labelledby="faq-title"><SectionHeading eyebrow="A few useful answers" id="faq-title">Before we begin.</SectionHeading><div className="faq-list">{faqs.map(faq => <article key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></article>)}</div></section></Container><ConsultationCTA /></>
}
