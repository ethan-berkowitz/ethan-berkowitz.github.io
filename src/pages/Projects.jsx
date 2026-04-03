import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div>
      <h1 className="page-title">Projects</h1>
      <div className="projects-grid">
        <ProjectCard
          title="Arcade Baseball"
          image="/assets/arcade_baseball.png"
          type="Game - Sports"
          description="Pinball-inspired baseball arcade game."
          link="/projects/my-game"
          typeIcon="/assets/arcade_baseball_icon.png"
          bottomText="003 - Made with Unity"
        />
        <ProjectCard
          title="Pattern Recall"
          image="/assets/pattern_recall.png"
          type="Game - Memory"
          description="Memorize a sequence of patterns."
          link="/projects/another"
          typeIcon="/assets/pattern_recall_icon.png"
          bottomText="004 - Made with Godot"
        />
        <ProjectCard
          title="Tower Archer"
          image="/assets/tower_archer.png"
          type="Game - Tower Defense"
          description="Defend your castle against a never ending wave of enemies."
          link="/projects/another"
          typeIcon="/assets/tower_archer_icon.png"
          bottomText="002 - Made with GameMaker"
        />
        <ProjectCard
          title="Sleepy Cat"
          image="/assets/sleepy_cat.png"
          type="Game - Idle Clicker"
          description="Dream of fish and then eat those fish. Repeat."
          link="/projects/another"
          typeIcon="/assets/sleepy_cat_icon.png"
          bottomText="001 - Made with GameMaker"
        />
      </div>
    </div>
  )
}