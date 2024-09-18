import React from 'react';

const projects = [
  { name: "Task Board", img: "./src/images/Task_Board.png", link: "https://github.com/jesse437/API-task-board" },
  { name: "Portfolio Project", img: "./src/images/portfolio1.png", link: "https://github.com/jesse437/my-portfolio-web" },
  { name: "No SQL API Connections", img: "./src/images/project.png", link: "https://github.com/jesse437/Social-Network-API-NoSQL" },
  { name: "PWA - Just a Text Editor", img: "./src/images/JATE.png", link: "https://github.com/jesse437/Text-Editor-PWA" },
  { name: "Weather Dashboard", img: "./src/images/weather.png", link: "https://github.com/jesse437/API-weather-dashboard" },
  

];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>My Projects</h1>
      <div className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

