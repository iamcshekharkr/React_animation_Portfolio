import React, { useEffect, useRef } from 'react'
import pdf from '../../pdf/Resume.pdf'
import hero from '../Images/hero/hero.jpg'
import './Home.css'
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null); 
  useEffect(() => {
    const options ={
      strings:["Welcome to my profile", 
        "My name is Chandrashekhar kumar",
        "I am full stack Developer",
        "App Developer and Web Developer(react native, reactjs)"],
      typedSpeed:80,
      backSpeed:80,
      loop:true
    }
    const typed =new Typed(typedRef.current ,options)
    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div className="contaner home">
        <div className=" left fade-up-right" 
         data-aos='fade-down'
         data-aos-duration="1000">
          <h1 ref={typedRef}> 
          </h1>
          <a href={pdf} download={"Resume"} className="btn btn-outline my-3">Download Resume</a>
        </div>
        <div className="right">
          <div className="img"  data-aos='fade-up-left'
    data-aos-duration="1000">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home