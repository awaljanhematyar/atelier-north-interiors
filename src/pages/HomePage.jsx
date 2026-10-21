import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Photo, { ImageCredit } from '../components/ui/Photo.jsx'
import ProjectCard from '../components/features/ProjectCard.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { projects } from '../data/projects.js'
import { services } from '../data/studio.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function HomePage() {
  usePageTitle('Spaces That Tell Your Story')
  const hero = projects[0].images[0]
  return <>
    <section className="home-hero" aria-labelledby="page-title">
      <Container>
        <div className="hero-heading"><div><p className="eyebrow">Interior design · Vancouver, BC</p><h1 id="page-title">Spaces That{' '}<br />Tell Your Story.</h1></div><div className="hero-aside"><p>Thoughtful spaces.{' '}<br />Natural materials.{' '}<br />A quieter kind of luxury.</p><a href="#selected-projects" className="text-link">Explore the concepts <ArrowDown size={16} aria-hidden="true" /></a></div></div>
        <Photo image={hero} priority sizes="(min-width: 1280px) 1152px, 100vw" className="hero-photo" />
        <div className="hero-caption"><span>01 / Cedar & Light — a fictional residential concept</span><ImageCredit image={hero} /></div>
      </Container>
    </section>
    <Container>
      <section className="editorial-intro section-space" aria-labelledby="intro-title"><SectionHeading eyebrow="The studio, imagined" id="intro-title">Considered interiors.{' '}<br />A sense of belonging.</SectionHeading><div><p className="lead-copy">The best spaces feel like they could only belong to the people who use them.</p><p>Atelier North is a fictional Vancouver studio exploring that idea through warm materials, clear proportions and a close attention to daily life. This portfolio brings together imagined briefs for homes, workplaces and places to gather.</p><Link to="/about" className="text-link mt-6">Discover the studio <ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>
      <section id="selected-projects" className="section-space section-border" aria-labelledby="selected-title"><div className="section-top"><SectionHeading eyebrow="Selected concept studies" id="selected-title">Different spaces.{' '}<br />One considered approach.</SectionHeading><Button to="/projects" variant="outline">View all projects <ArrowUpRight size={16} aria-hidden="true" /></Button></div><p className="demo-note">Fictional projects with illustrative stock photography. These are not completed client commissions.</p><div className="project-grid">{projects.filter(project => project.featured).map(project => <ProjectCard project={project} key={project.slug} />)}</div></section>
      <section className="section-space section-border" aria-labelledby="services-title"><SectionHeading eyebrow="Ways of thinking about space" id="services-title">From the everyday{' '}<br />to the extraordinary.</SectionHeading><div className="service-overview">{services.map((service, index) => <Link to="/services" key={service.id}><span className="eyebrow">0{index + 1}</span><h3>{service.title}</h3><p>{service.short}</p><ArrowUpRight size={20} aria-hidden="true" /></Link>)}</div></section>
      <section className="philosophy-panel section-space" aria-labelledby="philosophy-title"><p className="eyebrow">The design philosophy</p><h2 id="philosophy-title">Less, but with{' '}<br /><em>more meaning.</em></h2><p>Not every room needs another object. Sometimes it needs a better relationship between light, material and the way a day unfolds.</p><Link to="/about" className="text-link">Our point of view <ArrowUpRight size={16} aria-hidden="true" /></Link></section>
    </Container>
    <ConsultationCTA />
  </>
}
