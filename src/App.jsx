import React, { useEffect } from 'react'
import NabBar from './Components/NabBar/NabBar'
import Home from './Components/Screen/Home'
import Expericne from './Components/Experince/Experince'
import Skills from './Components/Skills/Skills'
import Project from './Components/Project/Project'
import Contact from  './Components/Contact/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init();
    return () => {
      
    };
  }, []);
  return (
    <>
    <NabBar />
    <div className="contaner">
      <Home />
     <Expericne />
     <Skills />
     <Project />
     <Contact />
    </div>
    </>
  )
}

export default App