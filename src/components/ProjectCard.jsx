
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './style/ProjectCard.css';
import React from 'react';
import { useEffect,useState } from 'react';

const ProjectCard= (props) => {

  
    return (
      <div className='card'>
      <div className="project-card">
        <div class="trigger" ></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div class="trigger"></div>
        <div className='project-card-container'>
          <div className="img-container"><img className='project-img' src={props.image}alt="" />
          <div className='icons'>
            
          <FontAwesomeIcon className='icn' icon={faCode} />
          <FontAwesomeIcon className='icn' icon={faEye} />
            
          </div>
          
          </div>
          <div className="project-card-txt">
          <h1 Style="font-size:1.2vw;" >{props.title}</h1>
          <p Style="font-size:1vw;">{props.description}</p>
          </div>
      </div>
      </div>
      </div>
  );
}

export default ProjectCard;
