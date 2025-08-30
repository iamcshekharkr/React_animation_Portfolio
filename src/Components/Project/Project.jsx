import React from 'react'
import './Project.css'
import img1 from '../Images/items/img1.jpg'
import img from '../Images/items/img.jpg'
import img2 from '../Images/items/img2.jpg'
import img3 from '../Images/items/img3.jpg'
import inter from '../../pdf/inter.pdf'
import java from '../../pdf/java.pdf'


function Project() {
  return (
    <div className="Coantainer projects"  id='project'>
      <div className="item">
        <h1>PROJECT</h1>
      </div>
      <div className="row">
        <div className="card"
          data-aos="flip-left"
          data-aos-duration="1000">
          <img src={img1} alt="img1" />
          <div className="card-body">
            <h5 class="card-title">React E-Commerc</h5>
            <p class="card-text">This is a project made with complete ReactJs.</p>
            <a href={java} class="btn btn-primary">Demo</a>
            <a href={inter} class="btn btn-primary">Card</a>
          </div>
        </div>
        <div className="card" 
         data-aos="flip-left"
    data-aos-duration="1000"
        >
          <img src={img} alt="img" />
          <div className="card-body">
            <h5 class="card-title">MERN Blogging</h5>
            <p class="card-text">This is a project made with complete ReactJs.</p>
            <a href={java} class="btn btn-primary">Demo</a>
            <a href={inter} class="btn btn-primary">Cord</a>
          </div>
        </div>
        <div className="card" data-aos="flip-left"
          data-aos-duration="1000">
          <img src={img2} alt="" />
          <div className="card-body" >
            <h5 class="card-title">React Recipe</h5>
            <p class="card-text">This is a project made with complete ReactJs.</p>
            <a href={java} class="btn btn-primary">Demo</a>
            <a href={inter} class="btn btn-primary">Card</a>
          </div>
        </div>
        <div className="card" data-aos="flip-left"
          data-aos-duration="1000">
          <img src={img3} alt="" />
          <div className="card-body">
            <h5 class="card-title">React Firebase App</h5>
            <p class="card-text">This is a project made with complete ReactJs.</p>
            <a href={java} class="btn btn-primary">Demo</a>
            <a href={inter} class="btn btn-primary">Card</a>
          </div>
        </div>


      </div>




    </div>
  )
}

export default Project