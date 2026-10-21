import { categories } from '../../data/projects.js'
import { filterProjects } from '../../utils/portfolio.js'

export default function ProjectFilters({ projects, active, onChange }) {
  const options = [{ id: 'all', label: 'All Projects' }, ...categories]
  return (
    <div className="project-filters" role="group" aria-label="Filter projects by category">
      {options.map(({ id, label }) => (
        <button key={id} type="button" aria-pressed={active === id} aria-controls="project-results" onClick={() => onChange(id)}>
          {label} <span aria-hidden="true">{filterProjects(projects, id).length}</span>
          <span className="sr-only"> ({filterProjects(projects, id).length} projects)</span>
        </button>
      ))}
    </div>
  )
}
