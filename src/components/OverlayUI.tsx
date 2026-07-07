import { useSelector } from 'react-redux'
import { RootState } from '../store'

export default function OverlayUI() {
  const activeSection = useSelector((state: RootState) => state.portfolio.activeSection)
  const scrollProgress = useSelector((state: RootState) => state.portfolio.scrollProgress)

  const handleNavClick = (sectionIndex: number) => {
    const targetElement = document.getElementById(`section-${sectionIndex}`)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Format scroll progress as percentage (0-100%)
  const progressPercent = Math.round(scrollProgress * 100)

  return (
    <div className="overlay-container">
      {/* Top Navbar */}
      <nav className="overlay-nav">
        <span className="nav-logo" onClick={() => handleNavClick(0)}>
          SIDDHARTH GUPTA
        </span>
        <div className="nav-actions">
          <button 
            className={`nav-btn ${activeSection === 1 ? 'active' : ''}`}
            onClick={() => handleNavClick(1)}
          >
            Work
          </button>
          <button 
            className={`nav-btn ${activeSection === 2 ? 'active' : ''}`}
            onClick={() => handleNavClick(2)}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Center Dynamic Typography */}
      <div className="text-display-container">
        {/* Section 0: Hero Title */}
        <div className={`text-slide ${activeSection === 0 ? 'visible' : ''}`}>
          <span className="slide-tag">01 / OVERVIEW</span>
          <h1 className="slide-title">CREATIVE DIGITAL EXPERIENCES</h1>
          <p className="slide-subtitle">
            Exploring the boundary between high-fidelity 3D graphics, spatial shaders, and intuitive user experiences.
          </p>
        </div>

        {/* Section 1: Discover Title */}
        <div className={`text-slide ${activeSection === 1 ? 'visible' : ''}`}>
          <span className="slide-tag">02 / INTERACTION</span>
          <h1 className="slide-title">DISCOVER YOUR PATRONUS</h1>
          <p className="slide-subtitle">
            Immersive 3D shaders and particles designed to respond dynamically to fluid user gestures.
          </p>
        </div>

        {/* Section 2: Contact Title */}
        <div className={`text-slide ${activeSection === 2 ? 'visible' : ''}`}>
          <span className="slide-tag">03 / COLLABORATION</span>
          <h1 className="slide-title">SECRET SKY</h1>
          <p className="slide-subtitle">
            Let's design and engineer WebGL-driven spatial products that elevate web standards.
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar & Indicator */}
      <div className="overlay-progress">
        <div className="progress-label">SCROLL PROGRESS</div>
        <div className="progress-bar-track">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="progress-percentage">{progressPercent}%</div>
      </div>
    </div>
  )
}
