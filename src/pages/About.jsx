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
              I'm a game and software developer based in Helsinki. Currently I am studying at
              Hive Helsinki, where I have learned to code in C and C++ while collaborating
              closely with my peers.
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
                {["Jazz Piano", "Drum Set"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

            <div className="skill-group">
              <div className="skill-group-label">Music Production</div>
              <div className="skill-tags">
                {["Composition", "Logic X", "Pro Tools", "Pure Data"].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}