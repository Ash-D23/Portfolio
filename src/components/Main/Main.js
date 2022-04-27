import './Main.css'
import React from 'react';
import { Button } from '../Button/Button';

function HeroSection() {
  const showResume = () => {
    window.location.assign('https://drive.google.com/file/d/1myhPVYMNA3IjL-gP-jRMeJLonruK0FFS/view?usp=sharing');
  }

  const showProjects = () => {
    window.location.assign('https://github.com/Ash-D23/');
  }

  return (
    <div className='hero-container'>

      <h1>Ashutosh Kumar</h1>
      <p>Full Stack Developer | Traveller | Blogger</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={showResume}
        >
        Resume
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={showProjects}
        >
          View projects
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
