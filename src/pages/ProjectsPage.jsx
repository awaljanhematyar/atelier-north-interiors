import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import ProjectCard from '../components/features/ProjectCard.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { categories, projects } from '../data/projects.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function ProjectsPage() {
  usePageTitle('Projects')
  return <><PageHeader eyebrow="The concept portfolio" title="Projects" description="Twelve imagined briefs. Four ways to explore the relationship between space, material and everyday life." /><Container><section className="section-space" aria-labelledby="collection-title"><div className="collection-intro"><h2 id="collection-title" className="eyebrow">All concepts / 12</h2><ul className="category-index" aria-label="Categories represented">{categories.map(category => <li key={category.id}>{category.label}<span>03</span></li>)}</ul></div><p className="demo-note">All projects and locations are fictional. Photos are independent references for mood and materials, not evidence of work by Atelier North. Category filtering is not available yet.</p><div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div></section></Container><ConsultationCTA /></>
}
