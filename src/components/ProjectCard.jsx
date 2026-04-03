import { Link } from 'react-router-dom'

export default function ProjectCard({title, image, type, typeIcon, description, link, bottomText}) {
    return (
      <div className="project-card-wrapper">
        <Link to={link} className="project-card">
          <h1>{title}</h1>
          <img src={image} alt={title} />
          <div className="project-card-type">
            <h2>{type}</h2>
            {typeIcon && <img src={typeIcon} alt={type} className="type-icon" />}
          </div>
          <p>{description}</p>
        </Link>
          <h3>{bottomText}</h3>
      </div>
    )
}