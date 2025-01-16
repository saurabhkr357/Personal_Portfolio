import React from 'react'
import './About.css'

import {FaAward} from 'react-icons/fa'
import {BiGitRepoForked} from 'react-icons/bi'
import {VscFolderOpened} from 'react-icons/vsc'
import Me from '../../assests/imageface.png';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know more</h5>
      <h2 >About Me</h2>
      <div className="container about_container">
        <div className='about_me'>
          <div className="about_me-image">
            <img src={Me} alt="About Image"/>
          </div>
          </div>
        <div className="about_content">
         <div className="about_cards">
           <article className='about_card'>
             <FaAward className='about_icon'></FaAward>
              <h5>Experience</h5>
              <small>1.5 years </small>
               
              </article>
           <article className='about_card'>
             <BiGitRepoForked className='about_icon'></BiGitRepoForked>
              <h5>Certifications</h5>
              <small>4+</small>
               
           </article>
           <article className='about_card'>
             <VscFolderOpened className='about_icon'></VscFolderOpened>
              <h5>Projects</h5>
              <small>2+ Personal Projects</small>
               
           </article>
         </div>
         <div className="para">
             <p >Enthusiastic Full Stack Developer with experience in Angular, .NET Core, SQL, Azure, and Agile Scrum methodologies. Skilled in developing efficient, scalable solutions with attention to detail and a focus on teamwork. Motivated to contribute to organizational success, embrace Agile principles, and drive continuous growth.</p>

         </div>
         <div className="button">
             <a  href='#contact' className='btn btn-primary'>Lets Talk</a>
         </div>
         
         </div>

      </div>
    

    </section>
  )
}

export default About