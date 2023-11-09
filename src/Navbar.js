import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'


function Navbar() {
  return (
    <Fragment>

      <div className="container-fluid top-section">

        <div className="container">
          <div className="row">
            <div className="col top-icons">
              <Link className='top-icons-link'><FaFacebookF /></Link>
              <Link className='top-icons-link'><TbBrandYoutubeFilled /></Link>
              <Link className='top-icons-link'><FaLinkedinIn /></Link>
              <Link className='top-icons-link'><AiFillInstagram /></Link>
            </div>
            
            <div className=" col envelope-icon">
              <Link className='mail-link'>
                <BiLogoGmail className='mail-logo' />
                <span className='mail-id'>info@rudra.com</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* navbar section */}

      <div className="top-nav-section">
        <div className="top-nav-inner">

          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                    <Link className="navbar-brand" to="#"><h1 className="nav-logo"><b>Rudra</b></h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" to="About">About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" to="Presence">Presence</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link active" to="Product">Product</Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Careers
                          </Link>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" to="#">Working at Rudra</Link></li>
                            <li><Link className="dropdown-item" to="#">Search all</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="#">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* top and nav end */}
    </Fragment>
  )
}

export default Navbar
