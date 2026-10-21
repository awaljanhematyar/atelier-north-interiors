export function filterProjects(projects, category = 'all') {
  return projects.filter(project => project && typeof project.slug === 'string' && (category === 'all' || project.category === category))
}

export function projectNeighbours(projects, slug) {
  const ordered = filterProjects(projects)
  const index = ordered.findIndex(project => project.slug === slug)
  return index < 0 ? { previous: null, next: null } : {
    previous: ordered[index - 1] ?? null,
    next: ordered[index + 1] ?? null,
  }
}

export function relatedProjects(projects, current, limit = 3) {
  if (!current) return []
  const others = filterProjects(projects).filter(project => project.slug !== current.slug)
  return [...others.filter(project => project.category === current.category), ...others.filter(project => project.category !== current.category)].slice(0, limit)
}
