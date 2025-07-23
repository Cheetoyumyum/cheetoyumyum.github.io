import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="home-layout">
      <div className="portfolio-container">
        <div className="glass-tile personal">
          <div className="personal-content-wrapper">
            <div className="profile-section">
              <img src="/profile-pic.jpg" alt="Chet Hawkins" className="profile-pic" />
              <h1>Chet Hawkins</h1>
              <p className="tagline">Cloud & Full-Stack Developer</p>
            </div>
            <div className="about">
              <h2>About Me</h2>
              <p>
                I'm an IT professional specializing in cloud administration and full-stack development. I build and manage secure, scalable systems that improve efficiency and solve real-world problems.
              </p>
            </div>
            <div className="strengths">
              <h2>Core Strengths</h2>
              <ul className="strength-list">
                <li>Cloud Architecture & M365 Admin</li>
                <li>Full-Stack Application Development</li>
                <li>Process Automation & Optimization</li>
              </ul>
            </div>
            <div className="education">
              <h2>Education & Certs</h2>
              <p className="edu-item"><strong>Diploma, Business Information Technology</strong><br />RRC Polytechnic (2022)</p>
              <p className="edu-item"><strong>CCNA Certifications</strong><br />Intro to Networks; Switching, Routing & Wireless Essentials</p>
            </div>
          </div>
          <div className="contact">
            <h2>Connect</h2>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/chet-hawkins/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/Cheetoyumyum" title="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="mailto:chet.hawkins.met@gmail.com" title="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="glass-tile skills">
            <h2>Tech Stack</h2>
            <div className="tile-content">
              <h3>Cloud & Network</h3>
              <div className="skill-set">
                <span>Azure</span> <span>Entra ID</span> <span>Microsoft 365</span>
                <span>Intune</span> <span>Windows Server</span> <span>PowerShell</span>
              </div>
              <h3>Programming</h3>
              <div className="skill-set">
                <span>JavaScript</span> <span>React</span> <span>Python</span>
                <span>Java</span> <span>C# (.NET)</span>
              </div>
              <h3>Automation & DevOps</h3>
              <div className="skill-set">
                <span>Docker</span> <span>Kubernetes</span> <span>CI/CD</span>
              </div>
              <h3>Database</h3>
              <div className="skill-set">
                <span>Azure SQL</span> <span>MongoDB</span> <span>Indexing</span>
              </div>
            </div>
          </div>
                   <div className="glass-tile experience">
            <h2>Work Experience</h2>
            <div className="tile-content">
              <div className="experience-timeline">

                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>IT Specialist</h3>
                    <h4>Sundance College | Jun 2024 - Present</h4>
                    <p>Administer Microsoft 365 for 200+ user accounts, ensuring 99.9% service uptime through proactive management of Entra ID, Intune, and Exchange.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>Software Developer (CO-OP)</h3>
                    <h4>Manitoba Health | Jan 2022 - Aug 2022</h4>
                    <p>Automated manual payroll processes, saving over $150,000 annually and boosting staff efficiency by 73% using M365 and Power Platform.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <h3>Full-Stack Developer</h3>
                    <h4>Freelance | Oct 2023 - Present</h4>
                    <p>Engineered and deployed scalable MERN stack applications, supporting over 1,000 active users with real-time data tracking features.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="project-card-grid">

          <a href="https://github.com/Cheetoyumyum/OPG/" target="_blank" rel="noopener noreferrer" className="glass-tile project-card">
            <img src="/Images/opduel.gif" alt="OPDuel" className="project-card-bg-image" />
            <div className="project-card-overlay">
              <h3>OPDuel</h3>
              <p>A gaming based front-end challenge to help deepen my knowledge of react</p>
            </div>
          </a>

          <a href="https://github.com/Cheetoyumyum/DMWatch/" target="_blank" rel="noopener noreferrer" className="glass-tile project-card">
            <img src="/Images/dmwatch.png" alt="DMWatch" className="project-card-bg-image" />
            <div className="project-card-overlay">
              <h3>DMWatch</h3>
              <p>Real-time data tracking for unfair play in the game Old School Runescape.</p>
            </div>
          </a>

          <a href="https://github.com/Cheetoyumyum?tab=repositories" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-card-overlay">
              <h3>More on GitHub</h3>
              <p>Explore more of my work, including scripts for infrastructure management.</p>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
}