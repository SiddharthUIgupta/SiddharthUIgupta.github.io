import { Github, Linkedin, Mail, ExternalLink, Cpu, Image as ImageIcon, MessageSquare, BarChart3 } from 'lucide-react'
import './App.css'

function App() {
  const projects = [
    {
      title: "NexusChat",
      description: "A high-performance interface for Large Language Models. Features streaming responses, chat persistence, and customizable model parameters.",
      icon: <MessageSquare size={32} />,
      tech: ["React", "TypeScript", "OpenAI API", "WebSockets"],
      link: "#"
    },
    {
      title: "Visionary",
      description: "AI-driven image generation dashboard with a curated gallery and prompt engineering assistance. Optimized for fast iteration.",
      icon: <ImageIcon size={32} />,
      tech: ["React", "Vite", "DALL-E 3", "Canvas API"],
      link: "#"
    },
    {
      title: "Sentimently",
      description: "Real-time sentiment analysis visualization for social media feeds. Uses advanced NLP to track brand health and public opinion.",
      icon: <BarChart3 size={32} />,
      tech: ["React", "D3.js", "Transformers.js", "FastAPI"],
      link: "#"
    }
  ]

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-content">
          <span className="logo">SG.AI</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Frontend Engineer <br /><span className="accent">Specializing in AI Interfaces</span></h1>
          <p>Building the next generation of human-AI interaction through clean, performant, and intuitive frontend experiences.</p>
          <div className="hero-cta">
            <button>View My Work</button>
            <div className="social-icons">
              <a href="#"><Github /></a>
              <a href="#"><Linkedin /></a>
              <a href="#"><Mail /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Featured AI Projects</h2>
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
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills">
        <h2>Technical Expertise</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3><Cpu size={20} /> AI Integration</h3>
            <ul>
              <li>LLM Prompt Engineering</li>
              <li>Vector Databases (Pinecone, Weaviate)</li>
              <li>HuggingFace Transformers.js</li>
              <li>Streaming API Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frontend Mastery</h3>
            <ul>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Data Visualization (D3.js, Recharts)</li>
              <li>Responsive Design & Accessibility</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sid Gupta. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
