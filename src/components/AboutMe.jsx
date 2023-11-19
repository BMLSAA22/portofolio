
import './style/AboutMe.css';
import React, {useState} from 'react';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    
  
    return (
      <div className='about-me' id='about-me'>
            <div className='about-me-content'>
                <img src="assets/about-image.webp" alt="" />
            </div>
            <div className='about-me-content'>
                
                <h1 Style={"font-size:max(2vw,15px)!important"}>About me</h1>
                <p Style="width: 100%;">I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
                <div>

                </div>
                <div className="tabs">
                    <div onClick={() => handleTabClick('tab1')} className={activeTab === 'tab1' ? 'tab tab1 active-tab' : 'tab tab1'}><h1>skills</h1></div>
                    <div onClick={() => handleTabClick('tab2')} className={activeTab === 'tab2' ? 'tab active-tab' : 'tab'}><h1>Education</h1></div>
                    <div onClick={() => handleTabClick('tab3')} className={activeTab === 'tab3' ? 'tab active-tab' : 'tab'}><h1>Certifications</h1></div>
                </div>
                <div className="tab-content" Style="position:relative; width:100%">
                    {activeTab === 'tab1' && 
                    <div Style="width:100%;poisition:relative;;display:flex;justify-content:center">
                        <ul Style="position:relative;width:100%">
                            <li Style="width:100% " >-Pytorch </li>
                            <li Style="width:100%">-Tensorflow </li>
                            <li Style="width:100%">-React </li>
                            <li Style="width:100%">-sql</li>
                        </ul>
                        </div>}
                    {activeTab === 'tab2' && <div Style=" width:100%">Studies at software engineering national high school of Sidi Bel Abbes since 2019 . 
                    data science & ai </div>}
                    {activeTab === 'tab3' && <div Style="width:100%;poisition:relative;;display:flex;justify-content:center">
                        <ul Style="width:100%;">
                            <li  Style="width:100%">-Machine learning with python<span>(free code camp) </span></li>
                            <li Style="poisition:relative;width:100%;">-Getting started with AI on jetson Nano (Nvidia)</li>
                            <li Style="width:100%; ">-Nlp Specialization <span>(Deeplearning.io)</span></li>
                            <li Style="width:100%;">-Cyber security <span>(google)</span></li>
                        </ul></div>}
      </div>
                
            </div>

    </div>
  );
}

export default AboutMe;
