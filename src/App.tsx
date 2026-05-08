import { Github, Linkedin, Mail, ExternalLink, Cpu, Briefcase, GraduationCap, Code2, Layers, Database, Lock, ShoppingCart, Globe, Phone } from 'lucide-react'
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
      title: "Product List UI",
      description: "High-performance e-commerce product interface with state-managed cart functionality.",
      icon: <ShoppingCart size={32} />,
      tech: ["React", "JavaScript", "CSS3"],
      link: "https://github.com/SiddharthUIgupta/product-list-ui"
    },
    {
      title: "Job App Tracker",
      description: "A specialized React application designed to manage the end-to-end job application lifecycle with real-time status tracking.",
      icon: <Briefcase size={32} />,
      tech: ["React", "Vite", "Tailwind CSS", "JSON-Server"],
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
      description: "Enterprise-grade dashboard template featuring real-time data visualization and complex state management.",
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
        "Integral member of the Sales and Order Management (SOM) team, focused on enhancing enterprise platform for managing the sales lifecycle from quote to fulfillment.",
        "Led the frontend design and development of crucial features such as the Product Catalog and Configuration pages, optimizing the transition from sales quotes to orders.",
        "Built reusable, generic widgets and components using Seismic UI (ReactJS variant), JavaScript ES5/6, and CSS, significantly improving modularity.",
        "Added comprehensive accessibility features, ensuring usability across diverse user needs and compliance with global standards.",
        "Designed and implemented AI Agentic Workflows using ServiceNow Agent Studio and Orchestrator—creating intelligent agents with defined roles, prompts, and tools.",
        "Worked closely with product managers and UX designers in an Agile environment to ensure the delivery of high-quality, strategically aligned product features."
      ]
    },
    {
      company: "Oracle",
      role: "Senior Applications Engineer",
      period: "March 2019 - April 2021",
      points: [
        "Worked on Oracle Service Cloud (OSVC) in Customer Experience (CX) team as Senior Applications Engineer.",
        "Used Oracle JET (JavaScript Extension Toolkit) to create UI elements which talks to services via REST APIs.",
        "Implemented UI leveraging Knockout JS, TypeScript, RxJs and test frameworks like Jasmine & Karma for Unit testing and Cucumber & Selenium for automated testing.",
        "Increased code coverage for fixed defects and issues for Oracle service cloud to minimize regression.",
        "Involved in application designing and adding new features and development.",
        "Debugged and fixed production UI integration issues with backend services."
      ]
    },
    {
      company: "First Republic Bank",
      role: "Frontend Developer",
      period: "April 2018 - March 2019",
      points: [
        "Developed a responsive, mobile-first single-page application (SPA) using Angular 5, Angular Material, Angular UI, Material cards, and Flex Layout.",
        "Worked on a client facing SPA called Private Wealth Management app with multiple widgets.",
        "Involved in SDLC, Requirements gathering, Analysis, Design, Development and Testing using AGILE methodology.",
        "Used Observables for asynchronously exchanging small amount of JSON data with the server behind the scenes.",
        "Skills used: HTML5, CSS3, Sass, Agile, Scrum, Highcharts, Chartjs, Flex-Layout, TypeScript 2, Angular 5, Angular Material UI, Jasmine, JSON, AJAX, Restful API, TFS, GIT, Github, Jenkins."
      ]
    },
    {
      company: "Varite India Pvt Ltd",
      role: "Frontend Developer",
      period: "June 2014 - Nov 2015",
      points: [
        "Designed dynamic client-side JavaScript codes to build web forms and simulate process for web application, page navigation and form validation.",
        "Developed the Application as SPA using Angularjs, Angular UI Router and Angular UI Bootstrap frameworks.",
        "Involved in SDLC Requirements gathering, Analysis, Design, Development and Testing of application developed using AGILE methodology.",
        "Used Ajax for asynchronously exchanging small amount of data with the server behind the scenes and performed cross-browser coding."
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
              <a href="https://www.linkedin.com/in/sidgupta3391/"><Linkedin /></a>
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
            <h3>Core Frontend</h3>
            <p>JavaScript (ES5/6), TypeScript, React, Redux, Angular, HTML5, CSS3, Tailwind, Bootstrap, jQuery, Sass</p>
          </div>
          <div className="skill-card">
            <Layers className="skill-icon" />
            <h3>Frameworks & Testing</h3>
            <p>Node.js, Next.js, Vite, RxJs, Seismic UI, Oracle JET, Jasmine, Karma, Cucumber, Selenium, Highcharts</p>
          </div>
          <div className="skill-card">
            <Database className="skill-icon" />
            <h3>AI, Backend & DB</h3>
            <p>AI Agentic Workflows, Prompt Engineering, Python, MongoDB, MySQL, REST APIs, Git, Jenkins, TFS</p>
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

      <section className="contact-info">
        <div className="contact-grid">
          <div className="contact-item">
            <Globe size={20} className="accent" />
            <span>San Francisco, CA</span>
          </div>
          <div className="contact-item">
            <Phone size={20} className="accent" />
            <span>+1 (415) 216-3450</span>
          </div>
          <div className="contact-item">
            <Mail size={20} className="accent" />
            <span>sidgupta3391@gmail.com</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Siddharth Gupta • Built with Apple HIG principles</p>
      </footer>
    </div>
  )
}

export default App
