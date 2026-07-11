// SkillsGrouped.jsx
import './SkillsGrouped.css'

const GROUPS = [
  {
    label: 'Core',
    skills: ['React', 'JavaScript', 'Node.js', 'TypeScript', 'CSS3', 'Vite'],
  },
  {
    label: 'Tooling',
    skills: ['Git & GitHub', 'Vercel', 'React Router', 'EmailJS'],
  },
  {
    label: 'Currently learning',
    skills: ['PHP', 'SQL', 'Express.js'],
    accent: true,
  },
]

function SkillsGrouped() {
  return (
    <section className="skills-grouped">
      <p className="section-eyebrow">Skills</p>
      <h2>What I actually build with</h2>

      <div className="skills-columns">
        {GROUPS.map(group => (
          <div className="skills-group" key={group.label}>
            <p className="skills-group-label">{group.label}</p>
            <div className="skills-pills">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className={`skill-pill ${group.accent ? 'skill-pill--accent' : ''}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsGrouped