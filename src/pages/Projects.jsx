import { useState, useMemo } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projectsData'

const TYPE_TAGS = new Set(['Games', 'Websites', 'Other'])

function getFilterOptions(projects) {
  const types = {}
  const languages = {}

  projects.forEach(({ tags }) => {
    tags.forEach(tag => {
      if (TYPE_TAGS.has(tag)) {
        types[tag] = (types[tag] || 0) + 1
      } else {
        languages[tag] = (languages[tag] || 0) + 1
      }
    })
  })

  return { types, languages }
}

function FilterSection({ heading, options, selected, onChange }) {
  return (
    <div className="filter-section">
      <h3 className="filter-heading">{heading}</h3>
      <ul className="check-list">
        {Object.entries(options).sort().map(([tag, count]) => (
          <li key={tag} className="check-item">
            <input
              type="checkbox"
              id={`filter-${tag}`}
              checked={selected.has(tag)}
              onChange={() => onChange(tag)}
            />
            <label htmlFor={`filter-${tag}`}>{tag}</label>
            <span className="filter-count">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Projects() {
  const [selectedTypes, setSelectedTypes] = useState(new Set())
  const [selectedLangs, setSelectedLangs] = useState(new Set())

  const { types, languages } = useMemo(() => getFilterOptions(projects), [])

  function toggle(set, setFn, tag) {
    setFn(prev => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  function clearAll() {
    setSelectedTypes(new Set())
    setSelectedLangs(new Set())
  }

  const filtered = useMemo(() => {
    return projects.filter(({ tags }) => {
      const typeMatch = selectedTypes.size === 0 || tags.some(t => selectedTypes.has(t))
      const langMatch = selectedLangs.size === 0 || tags.some(t => selectedLangs.has(t))
      return typeMatch && langMatch
    })
  }, [selectedTypes, selectedLangs])

  const hasFilters = selectedTypes.size > 0 || selectedLangs.size > 0

  return (
    <div className="projects-page">
      <h1 className="page-title">Projects</h1>
      <div className="projects-layout">

        <aside className="filter-sidebar">
          <FilterSection
            heading="Type"
            options={types}
            selected={selectedTypes}
            onChange={tag => toggle(selectedTypes, setSelectedTypes, tag)}
          />
          <FilterSection
            heading="Language / Engine"
            options={languages}
            selected={selectedLangs}
            onChange={tag => toggle(selectedLangs, setSelectedLangs, tag)}
          />
          {hasFilters && (
            <button className="clear-filters-btn" onClick={clearAll}>
              Clear all filters
            </button>
          )}
        </aside>

        <main className="projects-main">
          <p className="results-count">
            Showing {filtered.length} of {projects.length} projects
          </p>
          <div className="projects-grid">
            {filtered.length > 0 ? (
              filtered.map(project => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  type={project.type}
                  description={project.description}
                  typeIcon={project.typeIcon}
                  bottomText={project.bottomText}
                  link={`/projects/${project.id}`}
                />
              ))
            ) : (
              <p className="no-results">No projects match the selected filters.</p>
            )}
          </div>
        </main>

      </div>
    </div>
  )
}