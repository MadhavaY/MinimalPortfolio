import React, { useState } from "react";
import "./projects.css";
import RQG from "./images/RQG.png";
import portfolio from "./images/portfolio.png";
import BTD2 from "./images/BTD 2.png";
import tictactoe from "./images/tictactoe.png";

const Projects = () => {
  // List of projects and their corresponding image paths
  const projects = [
    {
      name: "Brain Tumor Detection",
      image: BTD2,
      link: ""
    },
    {
      name: "Synthetic Data with GANs",
      image: RQG,
      link: "https://github.com/MadhavaY/TumorCycleGan"
    },
    { name: "Movie Recommendation system", 
      image: "",
      link: ""
    
    },

    { name: "Portfolio", 
      image: portfolio,
      link: "https://madhavaportfolio.vercel.app/"
    
    },

    { name: "TicTacToe", 
      image: tictactoe,
      link: "https://tictactoe-madhavay.vercel.app/"
    },

    { name: "Random Quotes Generator", 
      image: tictactoe,
      link: "https://infinitequote.netlify.app/"
    },
  ];

  // State to track the currently hovered project
  const [hoveredProject, setHoveredProject] = useState(null);

  // Function to handle mouse hover over project name
  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  // Function to handle mouse leave from project name
  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
      <section className="projects-section">
        {/* List of project names */}
        <section className="header3">Projects</section>
        <section className="projects-list">
          <ul>
            {projects.map((project, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>

      {/* Display the image when a project name is hovered */}
      {hoveredProject && (
        <div
          className="project-images-div"
          // style={{ marginTop: "20px" }}
        >
          <img
            className="project-image"
            src={hoveredProject.image}
            alt={hoveredProject.name}
            style={{
              opacity: hoveredProject ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}

            // style={{ width: "300px", height: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
