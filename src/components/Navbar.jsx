
import './style/navbar.css';
import React, { useEffect } from 'react';




const Navbar = () => {
    
  
    return (
    <div className="navbar" >
        <img Style="position:relative;height:70%" src="assets/logo.png" alt="logo" />
        <div className="links">
            <a href="#about-me">About me</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact</a>
        </div>
    </div> 
  );
}

export default Navbar;
