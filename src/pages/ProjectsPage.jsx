import { useSearchParams } from 'react-router-dom'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import EmptyState from '../components/ui/EmptyState.jsx'
import ProjectCard from '../components/features/ProjectCard.jsx'
import ProjectFilters from '../components/features/ProjectFilters.jsx'
import ConsultationCTA from '../components/features/ConsultationCTA.jsx'
import { categories, projects } from '../data/projects.js'
import { filterProjects } from '../utils/portfolio.js'
import usePageTitle from '../hooks/usePageTitle.js'

export default function ProjectsPage() {
  usePageTitle('Projects')
  const [search, setSearch] = useSearchParams()
  const requested = search.get('category')
  const active = categories.some(category => category.id === requested) ? requested : 'all'
  const visible = filterProjects(projects, active)

  function chooseCategory(category) {
    const next = new URLSearchParams(search)
    if (category === 'all') next.delete('category')
    else next.set('category', category)
    setSearch(next, { preventScrollReset: true })
  }

  return <>
    <PageHeader eyebrow="The concept portfolio" title="Projects" description="Twelve imagined briefs. Four ways to explore the relationship between space, material and everyday life." />
    <Container>
      <section className="section-space" aria-labelledby="collection-title">
        <h2 id="collection-title" className="eyebrow mb-6">Explore the collection</h2>
        <ProjectFilters projects={projects} active={active} onChange={chooseCategory} />
        <p className="filter-count" role="status" aria-live="polite">Showing {visible.length} of {projects.length} concept studies</p>
        <p className="demo-note">All projects and locations are fictional. Photos are independent references for mood and materials, not evidence of work by Atelier North.</p>
        <div id="project-results">
          {visible.length ? <div className="project-grid">{visible.map(project => <ProjectCard key={project.slug} project={project} />)}</div> : <EmptyState title="No concepts in this category.">Choose another category to continue exploring.</EmptyState>}
        </div>
      </section>
    </Container>
    <ConsultationCTA />
  </>
}
