import React from 'react';
import "./about.scss";
import {motion} from 'framer-motion';

const PDF_FILE_URL='http://localhost:5173/Nishantsurve_Resume.pdf';

const About = () => {

    const downloadFileAtURL=(url) =>{
        const fileName=url.split("/").pop()
         const aTag = document.createElement("a");
         aTag.href=url;
         aTag.setAttribute("download",fileName)
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove();
      };
    

  return (

    <div className="about">

        <div className="main-title">
            <h2>About <span>me</span><span className="bg-text">My stats</span></h2>
        </div>
<div className="wrapper">
        <div className="about-container">
            <div className="left-about">
            <motion.h4 color="orange" >About <span>Me</span></motion.h4>
                    <p>
                    I am Nishant Surve, a passionate and self-resilient person aspiring to become a Software Developer with an aim to solve problems and designing solutions.
I have specialize in Web Development and familiar with Cross platform development as Flutter Framework and an Proficient problem solver and solved more than 700+ problems across platform such as LeetCode, Codechef.
                    </p>
                    <motion.button className="btn2" whileHover={{ scale: 1.1 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}>
           Resume
           </motion.button>
            </div>
            <div className="right-about">
                
                <div className="about-item">
                    <div className="abt-text">
                        <p className="large-text">3+</p>
                        <p className="small-text">Projects<br/>Completed</p>
                    </div>
                </div>
                

                <div className="about-item">
                    <div className="abt-text">
                        <p className="large-text">700+ Problems</p>
                        <p className="small-text">Data Structure &<br/>Algorithms</p>
                    </div>
                </div>

         

               
            </div>
        </div>

        </div>
        <div className="about-stats">
            <h5 className="stat-title">My Skills</h5>
            <div className="progress-bars">

            <div className="progress-bar">
                <p className="prog-title">C++</p>
                <div className="progress-con">
                    <p className="prog text">85%</p>
                    <div className="progress">
                        <span className="C"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">React</p>
                <div className="progress-con">
                    <p className="prog text">70%</p>
                    <div className="progress">
                        <span className="React"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">JavaScript</p>
                <div className="progress-con">
                    <p className="prog text">70%</p>
                    <div className="progress">
                        <span className="js"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">Node.js</p>
                <div className="progress-con">
                    <p className="prog text">70%</p>
                    <div className="progress">
                        <span className="Node"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">MongoDB</p>
                <div className="progress-con">
                    <p className="prog text">60%</p>
                    <div className="progress">
                        <span className="Mongodb"> </span>
                    </div>
                </div>
            </div>
            <div className="progress-bar">
                <p className="prog-title">Docker</p>
                <div className="progress-con">
                    <p className="prog text">40%</p>
                    <div className="progress">
                        <span className="Docker"> </span>
                    </div>
                </div>
            </div>
            
           

            </div>
        </div>

    </div>

  )
}

export default About;