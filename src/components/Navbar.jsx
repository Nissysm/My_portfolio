import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontFamily: 'cursive', 
            
                          color: 'yellow',fontSize:"35px" }}>P O R T F O L I O</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active space hm" aria-current="page" to="/" style={{ textDecoration: 'none',color:'yellow' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link space hm" to="/about" style={{ textDecoration: 'none'}}>About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link space" to="/portfolio" style={{ textDecoration: 'none',color:"yellow"  }}>Porject</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link space hm" to="/skills" style={{ textDecoration: 'none' }}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link space hm" to="/contact" style={{ textDecoration: 'none' }}>Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
