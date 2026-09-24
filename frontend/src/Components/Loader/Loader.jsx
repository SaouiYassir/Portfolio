import { useEffect, useState } from 'react'
import './Loader.css'

function Loader() {
  const [isDone, setIsDone] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const minDisplayTime = 250
    const start = Date.now()

    const finish = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(minDisplayTime - elapsed, 0)
      setTimeout(() => setIsDone(true), remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish)
      return () => window.removeEventListener('load', finish)
    }
  }, [])

  useEffect(() => {
    if (!isDone) return
    // wait for the fade-out transition to finish before unmounting
    const timeout = setTimeout(() => setIsHidden(true), 500)
    return () => clearTimeout(timeout)
  }, [isDone])

  if (isHidden) return null

  return (
    <div className={`loader-screen ${isDone ? 'loader-screen--hidden' : ''}`}>
      <div className="loader-grid"></div>
      <div className="loader-content">
        <span className="loader-mark">YS</span>
        <div className="loader-bar">
          <div className="loader-bar-fill"></div>
        </div>
        <p className="loader-label">Loading portfolio</p>
      </div>
    </div>
  )
}

export default Loader