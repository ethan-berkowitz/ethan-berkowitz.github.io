export default function About() {
  return (
    <div className="page-bg">
      <h1 className="page-title">About Me</h1>

      <div className="about-grid">

        {/* Bio */}
        <div className="about-card bio">
          <div className="card-header"><h2>Bio</h2></div>
          <div className="card-body">
            <p>
              Hello website visitor. My name is Ethan Berkowitz.
              I am a programmer currently living in Helsinki, Finland.
              I recently graduated from Hive Helsinki Coding School.
              I am interested in game design, game programming,
              quality assurance, and web development. Please reach out to me by email
              for any inquiries!
              
            </p>
          </div>
        </div>

        {/* Programming Skills */}
        <div className="about-card">
          <div className="card-header"><h2>Programming Skills</h2></div>
          <div className="card-body">
            <div className="skill-group">
              <div className="skill-group-label">Game Engines &amp; Libraries</div>
              <div className="skill-tags">
                {["Godot", "Unity", "GameMaker", "SFML", "Babylon.js"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">Languages</div>
              <div className="skill-tags">
                {["C", "C++", "C#", "Python", "GDScript"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-label">Web Development</div>
              <div className="skill-tags">
                {["HTML", "CSS", "JavaScript", "TypeScript", "React"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Skills */}
        <div className="about-card">
          <div className="card-header"><h2>Other Skills</h2></div>
          <div className="card-body">

            <div className="skill-group">
              <div className="skill-group-label">Music Performance</div>
              <div className="skill-tags">
                {["Piano", "Drum Set"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-label">Music Production</div>
              <div className="skill-tags">
                {["Composition", "Recording", "Logic X", "Pro Tools", "Ableton", "Pure Data"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="contact-container">
        <a href="mailto:ethanberko@gmail.com" className="email-button">
          Contact by Email
        </a>
      </div>
    </div>
  );
}