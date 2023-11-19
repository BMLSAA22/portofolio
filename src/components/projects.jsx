
import './style/projects.css';
import React from 'react';
import ProjectCard from './ProjectCard';
const Projects = () => {
    
  
    return (
      <div className="projects" id="projects">

        <div Style="display:flex;margin-top:5vh;justify-content:center ; font-size:max(2vw,20px)!important"><h1>Projects</h1></div>
        <div className="project-tabs">
            <div>All</div>
            <div>Web</div>
            <div>Mobile</div>
        </div>
        <div className="cards">
        <ProjectCard title={"fire detection on edge detection"} description={"creating a fire and smoke detection system on jetson nano and raspberry pi   "} image={"assets/fire.png"}></ProjectCard>
        <ProjectCard title={"courses platform"} description={"creating a courses platform using MERN   "} image={"assets/platform.png"}></ProjectCard>
        <ProjectCard title={"online store"} description={"creating an online store using flutter and firebase   "} image={"assets/aldo.png"}></ProjectCard>


        </div>
        
      </div>
  );
}

export default Projects;
