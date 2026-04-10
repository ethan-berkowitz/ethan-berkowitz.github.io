import ProjectCard from '../components/ProjectCard'
import projects from '../data/projectsData'

export default function Projects() {
  return (
    <div>
      <h1 className="page-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            type={project.type}
            description={project.description}
            typeIcon={project.typeIcon}
            bottomText={project.bottomText}
          />
        ))}
      </div>
    </div>
  )
}
