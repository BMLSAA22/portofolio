
import './style/HeroSection.css';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
const HeroSection = () => {
    useEffect(() => {
        // Your Typed.js configuration
        const options = {
          strings: ['Amayas','Web Developper','Data scientist'],
          typeSpeed: 100,
          backSpeed: 30,
          loop: true,
        };
        // Initialize Typed.js
        const typed = new Typed('.typing-element', options);
        // Cleanup on component unmount
        return () => {
          typed.destroy();
        };
      }, []); 
  
  
  
    return (
    <div className='HeroSection'>
        <div Style="display: flex; justify-content: center;flex-direction:column; align-items: center"><h1>Hello I'm </h1>
        <div Style="display:flex"><span className="typing-element"></span></div></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae fugiat error voluptas saepe et?
        </p>
        <div className="btns">
            <button className='hireBtn'>Hire me</button><button className='cvBtn'>Download cv</button>
        </div>
    </div>
  );
}

export default HeroSection;
