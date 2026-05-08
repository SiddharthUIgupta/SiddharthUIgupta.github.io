import { Github, Linkedin, Mail, ExternalLink, Cpu, Briefcase, GraduationCap, Code2, Layers, Database } from 'lucide-react'
import './App.css'

function App() {
  const projects = [
    {
      title: "LifeSyncUp",
      description: "A high-performance productivity dashboard built with Next.js 14. Features modules for mood tracking, hobby management, and smart scheduling.",
      icon: <Layers size={32} />,
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide"],
      link: "https://github.com/SiddharthUIgupta/LifeSyncUp"
    },
    {
      title: "AI LinkedIn Agent",
      description: "An intelligent job discovery assistant that automates the search and data extraction process from LinkedIn using Python and LLMs.",
      icon: <Cpu size={32} />,
      tech: ["Python", "OpenAI API", "BeautifulSoup", "Automation"],
      link: "https://github.com/SiddharthUIgupta/ai-linkedin-agent"
    },
    {
      title: "Job App Tracker",
      description: "A specialized React application designed to manage the end-to-end job application lifecycle with real-time status tracking.",
      icon: <Briefcase size={32} />,
      tech: ["React", "Vite", "Tailwind CSS", "JSON-Server"],
      link: "https://github.com/SiddharthUIgupta/job-app-tracker"
    }
  ]

  const experience = [
    {
      company: "ServiceNow",
      role: "Senior Software Engineer",
      period: "April 2021 - Present",
      points: [
        "Led frontend design for Product Catalog and Configuration pages using Seismic UI (React variant).",
        "Designed and implemented AI Agentic Workflows using ServiceNow Agent Studio and Orchestrator.",
        "Built reusable, generic widgets significantly improving modularity and system maintainability.",
        "Added comprehensive accessibility features ensuring compliance with global standards."
      ]
    },
    {
      company: "Oracle",
      role: "Senior Applications Engineer",
      period: "March 2019 - April 2021",
      points: [
        "Developed UI elements for Oracle Service Cloud using Oracle JET and Knockout JS.",
        "Implemented UI leveraging TypeScript, RxJs, and automated testing with Cucumber & Selenium.",
        "Increased code coverage and reduced regressions through rigorous unit testing."
      ]
    },
    {
      company: "First Republic Bank",
      role: "Frontend Developer",
      period: "April 2018 - March 2019",
      points: [
        "Developed a responsive, mobile-first SPA for Private Wealth Management using Angular 5.",
        "Utilized Angular Material and Flex Layout to create a modern, widget-based interface."
      ]
    }
  ]

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-content">
          <span className="logo">Siddharth Gupta</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Senior Frontend Engineer <br /><span className="accent">Specializing in AI & Enterprise UI</span></h1>
          <p>Over 7 years of experience building scalable, accessible, and intelligent web applications at companies like ServiceNow and Oracle.</p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button">View My Work</a>
            <div className="social-icons">
              <a href="https://github.com/SiddharthUIgupta"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="mailto:sidgupta3391@gmail.com"><Mail /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <a href={p.link} className="project-link">
                View Repository <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Professional Journey</h2>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div key={i} className="exp-item">
              <div className="exp-header">
                <h3>{exp.role} @ <span className="accent">{exp.company}</span></h3>
                <span className="period">{exp.period}</span>
              </div>
              <ul>
                {exp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Technical Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <Code2 className="skill-icon" />
            <h3>Frontend</h3>
            <p>React, Redux, Angular, TypeScript, HTML5, CSS3, Tailwind, Bootstrap</p>
          </div>
          <div className="skill-card">
            <Layers className="skill-icon" />
            <h3>Frameworks & Tools</h3>
            <p>Node.js, Next.js, Vite, Webpack, Git, RxJs, Seismic UI</p>
          </div>
          <div className="skill-card">
            <Database className="skill-icon" />
            <h3>Backend & AI</h3>
            <p>Python, MongoDB, MySQL, AI Agentic Workflows, Prompt Engineering</p>
          </div>
        </div>
      </section>

      <section className="education">
        <div className="edu-content">
          <GraduationCap size={40} className="accent" />
          <div>
            <h3>Master of Science in Computer Science</h3>
            <p>Texas A&M University • Graduated Aug 2017</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Siddharth Gupta. San Francisco, CA</p>
      </footer>
    </div>
  )
}

export default App
