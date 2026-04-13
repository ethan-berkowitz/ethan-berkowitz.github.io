import { useState, useMemo, useRef, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projectsData'

const TYPE_TAGS = new Set(['Games', 'Websites', 'Other'])

function getFilterOptions(projects) {
  const types = {}
  const languages = {}
  projects.forEach(({ tags }) => {
    tags.forEach(tag => {
      if (TYPE_TAGS.has(tag)) types[tag] = (types[tag] || 0) + 1
      else languages[tag] = (languages[tag] || 0) + 1
    })
  })
  return { types, languages }
}

function DropdownFilter({ label, options, selected, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const activeCount = Object.keys(options).filter(t => selected.has(t)).length

  return (
    <div className="dropdown-filter" ref={ref}>
      <button
        className={`dropdown-trigger${activeCount > 0 ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {label}
        {activeCount > 0 && <span className="dropdown-badge">{activeCount}</span>}
        <span className="dropdown-arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="dropdown-menu">
          {Object.entries(options).sort().map(([tag, count]) => (
            <label key={tag} className="dropdown-item">
              <input
                type="checkbox"
                checked={selected.has(tag)}
                onChange={() => onChange(tag)}
              />
              <span>{tag}</span>
              <span className="filter-count">{count}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const [selectedTypes, setSelectedTypes] = useState(new Set())
  const [selectedLangs, setSelectedLangs] = useState(new Set())
  const { types, languages } = useMemo(() => getFilterOptions(projects), [])

  function selectType(tag) {
    setSelectedTypes(prev => {
      if (prev.has(tag)) return new Set()
      return new Set([tag])
    })
  }

  function selectLang(tag) {
    setSelectedLangs(prev => {
      if (prev.has(tag)) return new Set()
      return new Set([tag])
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

      <div className="filters-bar">
        <DropdownFilter
          label="Type"
          options={types}
          selected={selectedTypes}
          onChange={selectType}
        />
        <DropdownFilter
          label="Language / Engine"
          options={languages}
          selected={selectedLangs}
          onChange={selectLang}
        />
        {hasFilters && (
          <button className="clear-filters-btn" onClick={clearAll}>
            Clear filters
          </button>
        )}
      </div>

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
    </div>
  )
}