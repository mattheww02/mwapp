import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Automated Geolocation OSINT',
      description: 'A deep learning system to identify and geolocate street signs, car number plates, and landmarks.',
      link: 'https://github.com/your-project',
    },
    {
      title: 'Sentiment Analysis of Political News Articles',
      description: 'A deep learning model that predicts sentiment with 95% accuracy.',
      link: 'https://github.com/your-project',
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projectList.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;