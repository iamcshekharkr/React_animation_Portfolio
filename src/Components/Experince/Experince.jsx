import React from 'react'
import microsoft from '../Images/company/microsoft.png'
import google from '../Images/company/google.png'
import netflix from '../Images/company/netflix.png'
import './Expericne.css'

function Experince() {
  return (
    <>
      <div className="Experince ex" id='experience'>
        <h1>EXPERIECNE</h1>
        <div className="maincontaner"
          data-aos="zoom-in"
          data-aos-duration="1000">
          <div className="left-ex" >
            <img src={google} alt="goodle" />
            <div className="mane">
              <div className="hedline">
                <h2>Senior Softeware Developer Engineer SDE - ||</h2>
              </div>
              <div className="hilns">
                <div>Sept, 2023 Present,</div>
                <div>CA,United State</div>
              </div>
              <div className="id">Worked on Google Gmail</div>
              <div className="id">Worked with the Google Bard Team</div>
            </div>
          </div>
        </div>
        <div className="maincontaner" 
         data-aos="zoom-in"
    data-aos-duration="1000">
          <div className="left-ex">
            <img src={microsoft} alt="microsoft" />
            <div className="mane">
              <div className="hedline">
                <h2> Softeware Developer Engineer SDE |</h2>
              </div>
              <div className="hilns">
                <div>Aug,2022 Mar 2023 Present</div>
                <div>CA,United State</div>
              </div>
              <div className="id">Worked on Windows 10 teminal </div>
              <div className="id">Worked on Window 11 Upconing Faetures</div>
            </div>
          </div>
        </div>
        <div className="maincontaner"  
        data-aos="zoom-in"
    data-aos-duration="1000">
          <div className="left-ex">
            <img src={netflix} alt="netflix" />
            <div className="mane">
              <div className="hedline">
                <h2> Softeware Developer Engineer - Intern</h2>
              </div>
              <div className="hilns">
                <div>Apr, 2023 june,2022 Bengluru, india</div>
                <div>CA,United State</div>
              </div>
              <div className="id">Worked on Nextflix payment system</div>
              <div className="id">Helped to creat UI for video player</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experince