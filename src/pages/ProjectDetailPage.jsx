import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
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
import GalleryDialog from '../components/features/GalleryDialog.jsx'
import ProjectNavigation from '../components/features/ProjectNavigation.jsx'
import { relatedProjects } from '../utils/portfolio.js'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  usePageTitle(project ? project.title || 'Untitled concept' : 'Project not found')
  if (!project) return <NotFoundPage />
  return <ProjectDetailContent key={slug} project={project} />
}

function ProjectDetailContent({ project }) {
  const [selection, setSelection] = useState(null)
  const scope = Array.isArray(project.scope) ? project.scope.filter(item => typeof item === 'string' && item.trim()) : []
  const materials = Array.isArray(project.materials) ? project.materials.filter(item => typeof item === 'string' && item.trim()) : []
  const images = Array.isArray(project.images) ? project.images.filter(image => image && typeof image.src === 'string' && image.src.trim()).map(image => ({ ...image, alt: image.alt || 'Illustrative interior reference photograph' })) : []
  const related = relatedProjects(projects, project)
  const openImage = (index, event) => setSelection({ index, trigger: event.currentTarget })
  return <>
    <PageHeader eyebrow={`${categoryLabel(project.category)} / Fictional concept`} title={project.title || 'Untitled concept'} description={project.location || 'Fictional location not specified'} />
    <Container>
      <div className="project-back"><Link className="text-link" to="/projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link><p>Concept study · Reference photography</p></div>
      <figure>
        {images.length ? <button type="button" className="gallery-trigger" aria-haspopup="dialog" aria-label={`Open image 1 of ${images.length}: ${images[0].alt}`} onClick={event => openImage(0, event)}><Photo image={images[0]} priority sizes="100vw" className="detail-hero" /><span aria-hidden="true">Open image ↗</span></button> : <Photo />}
        <figcaption className="hero-caption"><span>Illustrative reference only — not a completed studio project.</span>{images[0] && <ImageCredit image={images[0]} />}</figcaption>
      </figure>
      <section className="editorial-intro section-space" aria-labelledby="narrative-title"><SectionHeading eyebrow="The imagined brief" id="narrative-title">A place for{' '}<br />a different rhythm.</SectionHeading><div><p className="lead-copy">{project.description}</p><h3 className="eyebrow mt-8 mb-3">Design concept</h3><p>{project.concept}</p></div></section>
      <section className="project-specs section-space section-border" aria-label="Proposed scope and materials"><div><h2 className="section-title">Proposed scope</h2>{scope.length ? <ul>{scope.map(item => <li key={item}>{item}</li>)}</ul> : <p>Scope details are unavailable for this concept.</p>}</div><div><h2 className="section-title">Materials & finishes</h2>{materials.length ? <ul>{materials.map(item => <li key={item}>{item}</li>)}</ul> : <p>Material details are unavailable for this concept.</p>}</div></section>
      <section className="section-space section-border" aria-labelledby="gallery-title"><SectionHeading eyebrow="A visual direction" id="gallery-title">Textures, light & atmosphere.</SectionHeading><p className="demo-note">A reference collection assembled from different spaces. These photos are not views of a single real project. Open a photograph to explore the reference gallery.</p><div className="reference-gallery">{images.slice(1).map((image, index) => <figure key={image.id}><button type="button" className="gallery-trigger" aria-haspopup="dialog" aria-label={`Open image ${index + 2} of ${images.length}: ${image.alt}`} onClick={event => openImage(index + 1, event)}><Photo image={image} sizes="(min-width: 768px) 50vw, 100vw" /><span aria-hidden="true">Open image ↗</span></button><figcaption><ImageCredit image={image} /></figcaption></figure>)}</div></section>
      <ProjectNavigation projects={projects} slug={project.slug} />
      <section className="section-space section-border" aria-labelledby="related-title"><SectionHeading eyebrow="Continue exploring" id="related-title">Related concept studies</SectionHeading><div className="project-grid related-grid">{related.map(item => <ProjectCard key={item.slug} project={item} />)}</div></section>
    </Container><ConsultationCTA />
    {selection && <GalleryDialog images={images} initialIndex={selection.index} trigger={selection.trigger} onClose={() => setSelection(null)} />}
  </>
}
