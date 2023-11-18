
import './style/navbar.css';
import React, { useEffect } from 'react';




const Navbar = () => {
    
  
    return (
    <div className="navbar" >
        <h1>Logo</h1>
        <div className="links">
            <a href="#">About me</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
        </div>
    </div> 
  );
}

export default Navbar;
