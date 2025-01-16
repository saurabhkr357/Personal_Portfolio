import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {SiHackerrank} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/saurabh-kumar-468384195/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/saurabhkr357' target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
        <a href='https://www.hackerrank.com/saurabhkr357' target="_blank" rel="noopener noreferrer"><SiHackerrank></SiHackerrank></a>
       
    </div>
  )

}

export default HeaderSocials