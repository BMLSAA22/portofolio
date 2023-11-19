
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
        <p>We can build a much brighter future where humans are relieved of menial work using AI capabilities.

        </p>
        <div className="btns">
            <button className='hireBtn'><a href="https://www.linkedin.com/in/bourahlaamayas/">Hire me</a></button>
            <button className='cvBtn'><a href="" download={"assets/cv.pdf"}>Download cv</a></button>
        </div>
    </div>
  );
}

export default HeroSection;
