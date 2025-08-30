import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

import './Contact.css'




const Contact = () => {
  return (
<>
<div className="Cantaict contact"  id='contact'>
  <div className="contacts">
    <h1>CONTECT ME</h1>
  </div>
  <div className="contact-icon"  
   data-aos="zoom-in-up"
    data-aos-duration="1000"
  >
    <a href="https://www.instagram.com/" target='-black' className="item">
      <FaInstagramSquare className='icons'/>
    </a>
    <a hidden="https://www.linkedin.com/in/iamcshekharkr/" target='-black'className="item">
      <FaLinkedin  className='icons'/>
    </a>
    <a href="https://x.com/home" target="-black"className="item">
      <FaSquareXTwitter className='icons'/>
    </a>
    <a href="https://www.facebook.com/" target="-black" className="item">
      <CiFacebook className='icons' />
    </a>
    <a href="https://mail.google.com/mail/u/0/#inbox" target="-black" className="item">
      <SiGmail className='icons'/>
    </a>
    <a href="https://github.com/iamcshekharkr/app-developer" target="-black" className="item">
      <FaGithub className='icons'/>
    </a>
  </div>
</div>
</>  

)}

export default Contact