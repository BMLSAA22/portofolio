
import './style/AboutMe.css';
import React, {useState} from 'react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
  
    return (
      <div className='about-me'>
            <div className='about-me-content'>
                <img src="assets/about-image.webp" alt="" />
            </div>
            <div className='about-me-content'>
                
                <h1>About me</h1>
                <p Style="width: 100%;">I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
                <div>

                </div>
                <div className="tabs">
                    <div onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'tab active-tab' : 'tab'}>skills</div>
                    <div onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'tab active-tab' : 'tab'}>Education</div>
                    <div onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'tab active-tab' : 'tab'}>Certifications</div>
                </div>
                <div className="tab-content" Style="position:relative">
                    {activeTab === 'tab1' && <div>
                        <ul >
                            <li >Pytorch </li>
                            <li>Tensorflow </li>
                            <li>Tensorflow </li>
                            <li>Tensorflow </li>
                        </ul>
                        </div>}
                    {activeTab === 'tab2' && <div Style=" width:100%">Studied at software engineering national high school of Sidi Bel Abbes . 
                    data science & ai student </div>}
                    {activeTab === 'tab3' && <div Style="">
                        <ul >
                            <li >Machine learning with python </li>
                            <li>Getting started with AI on jetson Nano </li>
                            <li>Nlp Specialization </li>
                            <li>Cyber security </li>
                        </ul></div>}
      </div>
                
            </div>

    </div>
  );
}

export default AboutMe;
