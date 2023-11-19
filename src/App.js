import './App.css';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Stat from './components/Stat';
import Projects from './components/projects';
import Navbar from './components/Navbar';
import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import NET from 'vanta/dist/vanta.net.min'
import Contact from './components/contact';
import Footer from './components/footer';




function App() {
  
    // <>
    // <h1>hello</h1>
      
    // {/* <HeroSection></HeroSection>
    // <div className='stats'>
    //   <Stat></Stat>
    //   <Stat></Stat>
    //   <Stat></Stat>
    //   <Stat></Stat>
    // </div>
    // <AboutMe></AboutMe>
    
    // <Projects></Projects> */}
    
    
    
    // </>
    
      const [vantaEffect, setVantaEffect] = useState(null)
      const myRef = useRef(null)
      useEffect(() => {
        if (!vantaEffect) {
          setVantaEffect(NET({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x1B1919,
            spacing: 20.00
          }))
        }
        return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])
      
      return <><div ref={myRef} Style="width:100vw;  display: flex;flex-direction:column;
      align-items: center;">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
   
    </div>
    <div Style="width:100vw;display:flex;flex-direction:column; align-items:center">
    <div className='stats'>
    <Stat num={5} title="projects"></Stat>
    <Stat num={100} title="users"></Stat>
    <Stat num={7} title="certifications"></Stat>
    <Stat num={5} title="years"></Stat>
    </div>
    <AboutMe></AboutMe>
      
    <Projects></Projects>
    <Contact></Contact> 
    <Footer></Footer>

    </div>
    </>
    



  
}

export default App;
