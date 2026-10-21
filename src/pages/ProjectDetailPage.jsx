import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Photo, { ImageCredit } from '../components/ui/Photo.jsx'
import ProjectCard from '../components/features/ProjectCard.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { categoryLabel, getProject, projects } from '../data/projects.js'
import usePageTitle from '../hooks/usePageTitle.js'
import NotFoundPage from './NotFoundPage.jsx'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  usePageTitle(project?.title ?? 'Project not found')
  if (!project) return <NotFoundPage />
  const related = projects.filter(item => item.category === project.category && item.slug !== slug).slice(0, 2)
  return <>
    <PageHeader eyebrow={`${categoryLabel(project.category)} / Fictional concept`} title={project.title} description={project.location} />
    <Container>
      <div className="project-back"><Link className="text-link" to="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link><p>Concept study · Reference photography</p></div>
      <figure><Photo image={project.images[0]} priority sizes="100vw" className="detail-hero" /><figcaption className="hero-caption"><span>Illustrative reference only — not a completed studio project.</span><ImageCredit image={project.images[0]} /></figcaption></figure>
      <section className="editorial-intro section-space" aria-labelledby="narrative-title"><SectionHeading eyebrow="The imagined brief" id="narrative-title">A place for{' '}<br />a different rhythm.</SectionHeading><div><p className="lead-copy">{project.description}</p><h3 className="eyebrow mt-8 mb-3">Design concept</h3><p>{project.concept}</p></div></section>
      <section className="project-specs section-space section-border" aria-label="Proposed scope and materials"><div><h2 className="section-title">Proposed scope</h2><ul>{project.scope.map(item => <li key={item}>{item}</li>)}</ul></div><div><h2 className="section-title">Materials & finishes</h2><ul>{project.materials.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <section className="section-space section-border" aria-labelledby="gallery-title"><SectionHeading eyebrow="A visual direction" id="gallery-title">Textures, light & atmosphere.</SectionHeading><p className="demo-note">A reference collection assembled from different spaces. These photos are not views of a single real project. Gallery viewing is static in this phase.</p><div className="reference-gallery">{project.images.slice(1).map(image => <figure key={image.id}><Photo image={image} sizes="(min-width: 768px) 50vw, 100vw" /><figcaption><ImageCredit image={image} /></figcaption></figure>)}</div></section>
      <section className="section-space section-border" aria-labelledby="related-title"><SectionHeading eyebrow="Continue exploring" id="related-title">Related concept studies</SectionHeading><div className="project-grid related-grid">{related.map(item => <ProjectCard key={item.slug} project={item} />)}</div></section>
    </Container><ConsultationCTA />
  </>
}
