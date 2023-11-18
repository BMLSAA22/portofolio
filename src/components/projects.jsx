
import './style/projects.css';
import React from 'react';
import ProjectCard from './ProjectCard';
const Projects = () => {
    
  
    return (
      <div className="projects">

        <div Style="display:flex;margin-top:5vh;justify-content:center"><h1>Projects</h1></div>
        <div className="project-tabs">
            <div>All</div>
            <div>Web</div>
            <div>Mobile</div>
        </div>
        <div className="cards">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>

        </div>
        
      </div>
  );
}

export default Projects;
