import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projectNeighbours } from '../../utils/portfolio.js'

export default function ProjectNavigation({ projects, slug }) {
  const { previous, next } = projectNeighbours(projects, slug)
  return (
    <nav aria-label="Project navigation" className="project-navigation">
      {previous ? <Link to={`/projects/${previous.slug}`} rel="prev" aria-label={`Previous project: ${previous.title}`}><ArrowLeft size={18} aria-hidden="true" /><span><span>Previous Project</span><strong>{previous.title}</strong></span></Link> : <div className="project-boundary"><span>Previous Project</span><p>This is the first concept.</p></div>}
      {next ? <Link to={`/projects/${next.slug}`} rel="next" aria-label={`Next project: ${next.title}`}><span><span>Next Project</span><strong>{next.title}</strong></span><ArrowRight size={18} aria-hidden="true" /></Link> : <div className="project-boundary"><span>Next Project</span><p>This is the final concept.</p></div>}
    </nav>
  )
}
