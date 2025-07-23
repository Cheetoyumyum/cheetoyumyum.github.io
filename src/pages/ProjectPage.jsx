import { useParams, Link } from 'react-router-dom';

const projectData = {
  'gov-automation': {
    title: 'Government Process Automation',
    description: 'Developed and deployed a full-scale system to digitize payroll, manage leave requests, and automate administrative tasks for over 500 government employees. This project eliminated manual paperwork, drastically reduced processing times, and resulted in significant annual savings.',
    tech: ['Microsoft 365', 'SharePoint', 'Power Automate', 'Power Apps', 'JavaScript'],
    images: ['/images/gov-project-1.png', '/images/gov-project-2.png']
  },
  'm365-admin': {
    title: 'M365 Cloud Administration',
    description: 'Oversaw the complete administration of the campus IT infrastructure on Microsoft 365. This included managing over 200 user accounts in Entra ID, enforcing security policies with Intune, and ensuring 99.9% uptime for critical services like Exchange and SharePoint.',
    tech: ['Azure', 'Entra ID', 'Intune', 'PowerShell', 'Exchange Online'],
    images: ['/images/m365-1.png']
  },
  'full-stack-apps': {
    title: 'Scalable Full-Stack Applications',
    description: 'Engineered and maintained full-stack React applications with MongoDB backends for small businesses. Focused on performance optimization, third-party API integrations, and building real-time data tracking systems that supported over 1,000 active users.',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Docker'],
    images: ['/images/fs-app-1.png']
  },
};

export default function ProjectPage() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="portfolio-container">
        <div className="glass-tile" style={{ textAlign: 'center' }}>
          <h2>Project Not Found</h2>
          <Link to="/" className="button-link">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-container project-detail-container">
      <div className="glass-tile project-detail-tile">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>{project.title}</h1>
        <p className="project-description">{project.description}</p>

        <h3>Technology Stack</h3>
        <div className="skill-set">
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>

        <h3>Gallery</h3>
        <div className="project-gallery">
          {project.images.map(img => <img key={img} src={img} alt={`${project.title} screenshot`} />)}
        </div>
      </div>
    </div>
  );
}