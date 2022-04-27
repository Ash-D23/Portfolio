import React from 'react'
import './Experience.css'
import { Button } from '../Button/Button';

function Experience() {
  return (
    <>
    <div className="expcontainer">
      <div className="expwrapper">
        <div className="exprow">

          <div className="col1">
            <p className="expheading">
              Skills & Technology
            </p>
            <div className="mobile-col">
              <li> Javacript </li>
              <li> Python </li>
              <li> Web Development </li>
              <li> React JS </li>
              <li> Node JS </li>
              <li> SQL </li>
              <li> MongoDB </li>
            </div>
            <div className="skillbuttons">
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              Javacript
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              Python
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              Web Development
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              React JS
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              Node JS
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              SQL
            </Button>

            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
            >
              MongoDB
            </Button>

            </div>
          </div>
          <div className="col2">
          <div className="expimgwrap">
            <img src="./images/experience.svg" alt="skills" className="expimage" />
          </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Experience
