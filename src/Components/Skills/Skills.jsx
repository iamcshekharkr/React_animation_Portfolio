import React from 'react'
import htmls from '../Images/skills/html.png'
import css from '../Images/skills/css.png'
import javascript from '../Images/skills/javascript.png'
import firebase from '../Images/skills/firebase.png'
import node from '../Images/skills/node.png'
import react from '../Images/skills/react.png'
import figma from '../Images/skills/figma.png'
import graphql from '../Images/skills/graphql.png'
import mongodb from '../Images/skills/mongodb.png'
import './Skills.css'

function Skills() {
  return (
    <>
      <div className="ids"  id='skills'>

        <div className="contaner skills" >
          <div className="text">
            <h1>Skills</h1>
          </div>
          <div className="manu0"
            data-aos="flip-left"
            data-aos-duration="1000">

            <div className="html">
              <img src={htmls} alt="html" />
              <div>HTML</div>
            </div>
            <div className="css">
              <img src={css} alt="" />
              <div>CSS</div>
            </div>
          </div>
          <div className="manu1"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="javacripe">
              <img src={javascript} alt="javascript" />
              <div>JAVASCRIPT</div>
            </div>
            <div className="firebase">
              <img src={firebase} alt="firebase" />
              <div>FIREBASE</div>
            </div>
          </div>
          <div className="menu2"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="node">
              <img src={node} alt="node" />
              <div>NODE</div>
            </div>
            <div className="react">
              <img src={react} alt="react" />
              <div>REACT</div>
            </div>
          </div>
          <div className="menu3"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="graphql">
              <img src={graphql} alt="graphql" />
              <div>GRApHQL</div>
            </div>
            <div className="mongodb">
              <img src={mongodb} alt="mongodb" />
              <div>MONGODB</div>
            </div>
          </div>
          <div className="manu4"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="figma">
              <img src={figma} alt="figma" />
              <div>FIGMA</div>
            </div>
          </div>
        </div >
      </div>

    </>
  )
}

export default Skills