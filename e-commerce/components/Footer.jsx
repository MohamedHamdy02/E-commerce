import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
function Footer() {
  return (
    <div className='footer-container'>
      <p>2023 JSM Headphones All right reserved by {" "}
        <a className='text-color' href="https://www.linkedin.com/in/mohamed-hamdy97/" target='_blank'>Mohamed Ghazy</a>
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
        <AiFillGithub />
      </p>
    </div>
  )
}

export default Footer