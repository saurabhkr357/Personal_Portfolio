import React from 'react'
import './Portfolio.css'

import IMG9 from '../../assests/data.png'
import IMG7 from '../../assests/python.png'
import IMG6 from '../../assests/java.png'
import IMG11 from '../../assests/webdev.png'
import IMG12 from '../../assests/AzureIaasPaas.png'
import IMG13 from '../../assests/redhatSA.png'



const data=[
  {
    id:1,
    image: IMG12,
    title: 'Azure Architecture and Solutions',
    verfiy:'https://udemy-certificate.s3.amazonaws.com/image/UC-e3180f01-0970-4f6f-81ba-609476a3c697.jpg?v=1734018814000',
  },
  {
    id:1,
    image: IMG7,
    title: 'Python programming',
    verfiy:'https://udemy-certificate.s3.amazonaws.com/pdf/UC-bfb5af8b-bc4b-4b2a-a37b-cdfb5339d08e.pdf',
  },
 
  {
    id:1,
    image: IMG6,
    title: 'Java Programming',
    verfiy:'https://drive.google.com/file/d/1zGs_yabNP4HTClhBO4SF7Az8F_G5eqhk/view?usp=sharing',
  },
  {
    id:1,
    image: IMG11,
    title: 'Web Development Bootcamp',
    verfiy:'https://udemy-certificate.s3.amazonaws.com/pdf/UC-c3a23bac-b25c-42d6-9ecc-9398a251daad.pdf',
  },
  {
    id:1,
    image: IMG13,
    title: 'Redhat System Administration',
    verfiy:'https://drive.google.com/file/d/16GAxTgSfzrSwbej95QNbEzid25pRLXDx/view?usp=sharing',
  },
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Certificates</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,verfiy}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
         <div className="portfolio_item-cta">
            <a href={verfiy} className='btn' target='_blank'>Verify</a>
          
         </div>
        </article>
            )
          })
        }

        

        
      </div>
      
      </section>
  )
}

export default Portfolio