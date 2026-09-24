// StackStrip.jsx
import './StackStrip.css'

const STACK = [
  { name: 'React', icon: 'bi-code-square' },
  { name: 'Vite', icon: 'bi-lightning-charge' },
  { name: 'JavaScript', icon: 'bi-filetype-js' },
  { name: 'CSS3', icon: 'bi-filetype-css' },
  { name: 'React Router', icon: 'bi-signpost-split' },
  { name: 'Git / GitHub', icon: 'bi-github' },
]

function StackStrip() {
  return (
    <section className="stack-strip">
      <p className="stack-label">Tools I build with</p>
      <div className="stack-row">
        {STACK.map(item => (
          <div className="stack-pill" key={item.name}>
            <i className={`bi ${item.icon}`}></i>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StackStrip