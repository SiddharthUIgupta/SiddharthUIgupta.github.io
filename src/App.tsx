import { Github, Linkedin, Mail, ExternalLink, Cpu, Briefcase, GraduationCap, Code2, Layers, Database, Lock, ShoppingCart } from 'lucide-react'
import './App.css'

function App() {
  const projects = [
    {
      title: "LifeSyncUp",
      description: "A comprehensive productivity platform built with Next.js. Features modular trackers for habits, mood, and scheduling.",
      icon: <Layers size={32} />,
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/SiddharthUIgupta/LifeSyncUp"
    },
    {
      title: "AI LinkedIn Agent",
      description: "Python automation for job hunting. Parses listings and automates application data extraction using LLMs.",
      icon: <Cpu size={32} />,
      tech: ["Python", "OpenAI API", "BeautifulSoup"],
      link: "https://github.com/SiddharthUIgupta/ai-linkedin-agent"
    },
    {
      title: "Product List UI",
      description: "High-performance e-commerce product interface with state-managed cart functionality.",
      icon: <ShoppingCart size={32} />,
      tech: ["React", "JavaScript", "CSS3"],
      link: "https://github.com/SiddharthUIgupta/product-list-ui"
    },
    {
      title: "Job App Tracker",
      description: "End-to-end application lifecycle management tool for tracking job statuses in real-time.",
      icon: <Briefcase size={32} />,
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://github.com/SiddharthUIgupta/job-app-tracker"
    },
    {
      title: "Password Gen React",
      description: "Secure, customizable password generator with strength estimation and clipboard integration.",
      icon: <Lock size={32} />,
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://github.com/SiddharthUIgupta/password-gen-react"
    },
    {
      title: "Admin Dashboard",
      description: "Enterprise-grade dashboard template featuring real-time data visualization.",
      icon: <Database size={32} />,
      tech: ["React", "Redux", "D3.js"],
      link: "https://github.com/SiddharthUIgupta/admin-dashboard"
    }
  ]

  const experience = [
    {
      company: "ServiceNow",
      role: "Senior Software Engineer",
      period: "April 2021 - Present",
      points: [
        "Integral member of the Sales and Order Management (SOM) team, enhancing enterprise platforms for managing the sales lifecycle.",
        "Led frontend design for Product Catalog and Configuration pages using Seismic UI (React variant), JavaScript ES5/6, and CSS.",
        "Designed and implemented AI Agentic Workflows using ServiceNow Agent Studio and Orchestrator—creating intelligent agents with defined roles and tools.",
        "Built reusable, generic widgets significantly improving modularity and system maintainability.",
        "Worked closely with product managers and UX designers in an Agile environment to deliver high-quality features.",
        "Applied industry best practices in code quality and performance optimization for complex data integrations."
      ]
    },
    {
      company: "Oracle",
      role: "Senior Applications Engineer",
      period: "March 2019 - April 2021",
      points: [
        "Worked on Oracle Service Cloud (OSVC) in the Customer Experience (CX) team.",
        "Used Oracle JET to create UI elements communicating with services via REST APIs.",
        "Implemented UI leveraging Knockout JS, TypeScript, and RxJs.",
        "Utilized test frameworks like Jasmine & Karma for Unit testing and Cucumber & Selenium for automated testing.",
        "Increased code coverage for fixed defects to minimize regression.",
        "Debugged and fixed production UI integration issues with backend services."
      ]
    },
    {
      company: "First Republic Bank",
      role: "Frontend Developer",
      period: "April 2018 - March 2019",
      points: [
        "Developed a responsive, mobile-first SPA for Private Wealth Management using Angular 5.",
        "Utilized Angular Material, Material cards, and Flex Layout for UI development.",
        "Involved in SDLC, requirements gathering, analysis, and design using AGILE methodology.",
        "Used Observables for asynchronous JSON data exchange with backend servers.",
        "Performed cross-browser testing to ensure full compatibility."
      ]
    },
    {
      company: "Varite India Pvt Ltd",
      role: "Frontend Developer",
      period: "June 2014 - Nov 2015",
      points: [
        "Designed dynamic client-side JavaScript codes for web forms and process simulation.",
        "Developed SPAs using AngularJS, Angular UI Router, and Angular UI Bootstrap.",
        "Used Ajax for asynchronous data exchange and handled cross-browser coding challenges."
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
        <h2>Professional Experience</h2>
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
            <h3>Core Frontend</h3>
            <p>JavaScript (ES5/6), TypeScript, React, Redux, Angular, HTML5, CSS3, Tailwind, Bootstrap, jQuery</p>
          </div>
          <div className="skill-card">
            <Layers className="skill-icon" />
            <h3>Frameworks & Testing</h3>
            <p>Node.js, Next.js, Vite, RxJs, Seismic UI, Oracle JET, Jasmine, Karma, Cucumber, Selenium</p>
          </div>
          <div className="skill-card">
            <Database className="skill-icon" />
            <h3>AI, Backend & DB</h3>
            <p>AI Agentic Workflows, Prompt Engineering, Python, MongoDB, MySQL, REST APIs, Git, Jenkins</p>
          </div>
        </div>
      </section>

      <section className="education">
        <div className="edu-content">
          <GraduationCap size={40} className="accent" />
          <div>
            <h3>Master of Science in Computer Science</h3>
            <p>Texas A&M University • Aug 2017</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Siddharth Gupta • San Francisco, CA • +1 (415) 216-3450</p>
      </footer>
    </div>
  )
}

export default App
