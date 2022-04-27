import React from 'react'
import  './footer.css'

function Footer() {
  return (
    <>
      <div className="container-foot">
        <h2 className="big-heading wh">Let's Get In Touch</h2>

        <div className="foot-links">
        <ul>
          <li><a href="https://www.facebook.com/people/Ashutosh-Kumar/100007997316460" className="social-icon icon-white" ><i className="fab fa-facebook fa-2x "></i></a></li>
          <li><a href="https://www.linkedin.com/in/ashutosh18k23/" className="social-icon icon-white"><i className="fab fa-linkedin fa-2x "></i></a></li>
          <li><a href="https://github.com/Ash-D23" className="social-icon icon-white"><i className="fab fa-github fa-2x "></i></a></li>
          <li><a className="social-icon icon-white"><i className="fas fa-envelope fa-2x "></i></a></li>
        </ul>
        <i class="fab fa-facebook"></i>
        </div>

        <div className="foot-bottom">
          <p>Copyrights &copy; 2021 All Rights Reserved by Ashutosh.</p>
        </div>
      </div>

    </>
  )
}

export default Footer
