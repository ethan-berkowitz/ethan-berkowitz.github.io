import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="projects-grid">
      <ProjectCard
        title="Arcade Baseball"
        image="/assets/arcade_baseball.png"
        type="Game - Sports"
        description="Pinball-inspired baseball arcade game!"
        link="/projects/my-game"
        typeIcon="/assets/arcade_baseball_icon.png"
        bottomText="000 - Made with Unity"
      />
      <ProjectCard
        title="Pattern Recall"
        image="/assets/pattern_recall.png"
        type="Game - Memory"
        description="Memorize a sequence of patterns!"
        link="/projects/another"
        typeIcon="/assets/pattern_recall_icon.png"
        bottomText="001 - Made with Godot"
      />
      <ProjectCard
        title="Tower Archer"
        image="/assets/tower_archer.png"
        type="Game - Tower Defense"
        description="Defend your castle against a never ending wave of enemies!"
        link="/projects/another"
        typeIcon="/assets/tower_archer_icon.png"
        bottomText="002 - Made with GameMaker"
      />
    </div>
  )
}