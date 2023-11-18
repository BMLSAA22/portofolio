
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './style/ProjectCard.css';
import React from 'react';

const ProjectCard= () => {
    
  
    return (
      <div className="project-card">
       <div className="img-container"><img className='project-img' src="assets/about-image.webp" alt="" />
       <div className='icons'>
        
       <FontAwesomeIcon className='icn' icon={faCode} />
       <FontAwesomeIcon className='icn' icon={faEye} />
        
       </div>
       
       </div>
       <div className="project-card-txt">
       <h1 >Project title</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
      </div>
  );
}

export default ProjectCard;
