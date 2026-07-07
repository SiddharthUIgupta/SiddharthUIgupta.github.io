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

  const progressPercent = Math.round(scrollProgress * 100)

  // Array of section data to keep code clean and modular
  const sectionsData = [
    {
      tag: "01 / OVERVIEW",
      title: "SIDDHARTH GUPTA",
      subtitle: "Senior Frontend Engineer specializing in AI & Enterprise UI. Building high-performance, accessible, and intelligent web applications.",
      link: null
    },
    {
      tag: "02 / FEATURED PROJECT",
      title: "OPTIONS ACADEMY",
      subtitle: "A full-stack trading education platform featuring interactive tutorials with quizzes, a real-time market explorer, and a paper trading simulator.",
      link: "https://github.com/SiddharthUIgupta/options-academy"
    },
    {
      tag: "03 / FEATURED PROJECT",
      title: "LIFESYNCUP",
      subtitle: "A high-performance productivity dashboard built with Next.js 14. Features modules for mood tracking, hobby management, and smart scheduling.",
      link: "https://github.com/SiddharthUIgupta/LifeSyncUp"
    },
    {
      tag: "04 / FEATURED PROJECT",
      title: "AI LINKEDIN AGENT",
      subtitle: "An intelligent job discovery assistant that automates the search and data extraction process from LinkedIn using Python and LLMs.",
      link: "https://github.com/SiddharthUIgupta/ai-linkedin-agent"
    },
    {
      tag: "05 / FEATURED PROJECT",
      title: "FUN-FINDER",
      subtitle: "A personalized activity discovery platform helping users find local events and DIY projects based on interests.",
      link: "https://github.com/SiddharthUIgupta/fun-finder"
    },
    {
      tag: "06 / WORK EXPERIENCE",
      title: "ENTERPRISE SYSTEMS",
      subtitle: "ServiceNow (Senior Software Engineer, 2021-Present) • Leading frontend product catalog and agent study configurations. Oracle (Senior Applications Engineer, 2019-2021).",
      link: null
    },
    {
      tag: "07 / TECHNICAL ARSENAL",
      title: "TECH STACK",
      subtitle: "React, TypeScript, Next.js, Node.js, Angular, WebGL Shaders, ServiceNow Studio, and AI Agentic Workflows.",
      link: null
    },
    {
      tag: "08 / CONNECT",
      title: "SECRET SKY",
      subtitle: "Let's build next-generation spatial computing and WebGL interfaces. San Francisco, CA • sidgupta3391@gmail.com • +1 (415) 216-3450",
      link: null
    }
  ]

  return (
    <div className="overlay-container">
      {/* Top Navbar */}
      <nav className="overlay-nav">
        <span className="nav-logo" onClick={() => handleNavClick(0)}>
          SIDDHARTH GUPTA
        </span>
        <div className="nav-actions">
          <button 
            className={`nav-btn ${activeSection === 0 ? 'active' : ''}`}
            onClick={() => handleNavClick(0)}
          >
            Overview
          </button>
          <button 
            className={`nav-btn ${activeSection >= 1 && activeSection <= 4 ? 'active' : ''}`}
            onClick={() => handleNavClick(1)}
          >
            Work
          </button>
          <button 
            className={`nav-btn ${activeSection === 5 || activeSection === 6 ? 'active' : ''}`}
            onClick={() => handleNavClick(5)}
          >
            Experience
          </button>
          <button 
            className={`nav-btn ${activeSection === 7 ? 'active' : ''}`}
            onClick={() => handleNavClick(7)}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Center Dynamic Typography */}
      <div className="text-display-container">
        {sectionsData.map((sec, idx) => (
          <div key={idx} className={`text-slide ${activeSection === idx ? 'visible' : ''}`}>
            <span className="slide-tag">{sec.tag}</span>
            <h1 className="slide-title">{sec.title}</h1>
            <p className="slide-subtitle">{sec.subtitle}</p>
            {sec.link && (
              <a 
                href={sec.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link-btn"
              >
                View Repository
                <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        ))}
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
