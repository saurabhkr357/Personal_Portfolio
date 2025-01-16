import React from 'react'
import './WorkExperience.css'
import { BiCheck, BiFontSize } from 'react-icons/bi'
const WorkExperience = () => {
  return (
    <section id='services_workExp'>
      <br></br><br></br><br></br>
      <h2>Work Experience</h2>
      <div className='cointainer service_container_workExp'>
        <article className="services_work_exp">
          <div className="service_head_workExperience">
          </div>
          <ul className='service_list'>
            <h3>GS Labs | GAVS</h3>
            <h4>Full Stack .NET Developer</h4>
            <li>
              <BiCheck className='service_list-icon' style={{ fontSize: "29px" }}></BiCheck>
              <p>Worked on live Projects and resolved 80+ tickets spanning stored procedures, processor APIs, backend APIs, and frontend UI.
              </p>
            </li>
            <li>
              <BiCheck className='service_list-icon' style={{ fontSize: "65px" }}></BiCheck>
              <p>Optimized application performance by 20% while ensuring code quality by writing comprehensive unit test cases and
                actively contributed to Agile Scrum processes, including sprint planning, daily stand-ups, and retrospectives to enhance
                collaboration and deliverables</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' style={{ fontSize: "18px" }}></BiCheck>
              <p>Worked with technologies such as Angular, .NET WebAPI, MS SQL, and Azure.
              </p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default WorkExperience