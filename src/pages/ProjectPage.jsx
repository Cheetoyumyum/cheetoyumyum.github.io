import { useParams, Link } from 'react-router-dom';

  return (
    <div className="portfolio-container project-detail-container">
      <div className="glass-tile project-detail-tile">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1></h1>
        <p className="project-description"></p>

        <h3>Technology Stack</h3>
        <div className="skill-set">
        </div>

        <h3>Gallery</h3>
        <div className="project-gallery">
        </div>
      </div>
    </div>
  );
}
