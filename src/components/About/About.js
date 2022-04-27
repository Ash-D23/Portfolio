
import React from 'react'
import './About.css'

function About() {
  return (
    <>
    <div className="Infocontainer">
      <div className="Infowrapper" >
          <div className="InforRow">
              <div className="column1">
                  <div className="textwrapper">

                    <p className="topline">
                    About Me
                    </p>

                    <h1 className="heading">
                    Ashutosh Kumar
                    </h1>

                    <p className="subtitle">
                    Full Stack Web Developer proficient in Javascript & React, Love learning new technologies and develop Web Applications.<br />Always looking for opportunities to learn new skills and be dynamic in this world of technology.
                    <br/> Apart from Coding, I am a Blogger/Writer and a Traveller.
                    </p>
                  </div>
              </div>
              <div className="column2">
                <div className="imgwrap">
                  <img src="images/about.svg" alt="about" className="image" />
                </div>
             </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default About
