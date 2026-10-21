import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Photo, { ImageCredit } from '../ui/Photo.jsx'
import { categoryLabel } from '../../data/projects.js'

export default function ProjectCard({ project }) {
  if (!project || typeof project.slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) return null
  const image = Array.isArray(project.images) ? project.images.find(image => image?.src) : undefined
  const title = project.title || 'Untitled concept'
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} className="project-card__link" aria-label={`Explore ${title}`}>
        <Photo image={image} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
        <div className="project-card__meta"><span>{categoryLabel(project.category)} / Concept study</span><ArrowUpRight size={18} aria-hidden="true" /></div>
        <h3>{title}</h3>
        <p className="project-card__location">{project.location}</p>
      </Link>
      <ImageCredit image={image} />
    </article>
  )
}
