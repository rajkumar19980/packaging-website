import React, { Fragment } from 'react'
import './Footer.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import { AiFillInstagram } from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'
import { BsTelephoneFill, BsBrowserChrome } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Mailer from './Mailer'
import FormTab from './FormTab'

const Footer = () => {
  return (
    <Fragment>
      {/* form */}
      <Mailer/>
      <FormTab/>

      {/* section8 */}

      <div className="map">
        <div className="map-inner">

          <iframe title='map' width="100%"
            height="450" allowFullScreen className='map-link' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.8217661125609!2d77.28308920923216!3d28.350169538937383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd9c191d67b33%3A0x8dbef620dd110033!2sKESHAV%20SHOPS!5e0!3m2!1sen!2sin!4v1693476219985!5m2!1sen!2sin" ></iframe>

        </div>
      </div>

      {/* <!-- section8 end -->

<!-- section9 --> */}

      <div className="container">
        <div className="contact-inner">

          <div className="row">
            <div className="col-md-4">
              <Link to=""><BsTelephoneFill /><h6>+91 98765 43210</h6></Link>
            </div>
            <div className="col-md-4">
              <Link to=""><BiLogoGmail /><h6>info@rudra.com</h6></Link>
            </div>
            <div className="col-md-4">
              <Link to=""><BsBrowserChrome /><h6>www.rudra.com</h6></Link>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- section9 end -->

<!-- section10 --> */}

      <div className="container-fluid section10">
        <div className="container">

          <div className="row section10-row">

            <div className="col-md-2">
              <h5 className="heading">Company</h5>
              <div className="sub-heading">
                <h6 className="content">About Company</h6>
                <h6 className="content">Presence</h6>
                <h6 className="content">Job Opportunities</h6>
              </div>
            </div>

            <div className="col-md-2">
              <h5 className="heading">Customers</h5>
              <div className="sub-heading">
                <h6 className="content">Client Support</h6>
                <h6 className="content">Latest News</h6>
                <h6 className="content">Awards Recognition</h6>
              </div>
            </div>

            <div className="col-md-4">
              <h5 className="heading">Get in touch</h5>
              <div className="sub-heading">
                <span>Rudra Machinery Packaging, near sohna road, Gounchhi, Ballabhgarh, Faridabad, HARYANA, INDIA 121004</span>
              </div>
            </div>

            <div className="col-md-4">
              <h5 className="heading">Follow us on Instagram</h5>
              <div className="sub-heading">
                <h6 className="user-id">@user_id</h6>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* <!-- section10 end -->

<!-- section11 --> */}

      <div className="container-fluid section11" >
        <div className="container">
          <nav className="navbar section11-nav">
            <Link className="navbar-brand" to="#"><h1 className="logo">Rudra</h1></Link>
            <Link to="#" className="social"><FaFacebookF /></Link>
            <Link to="#" className="social"><TbBrandYoutubeFilled /></Link>
            <Link to="#" className="social"><FaLinkedinIn /></Link>
            <Link to="#" className="social"><AiFillInstagram /></Link>
          </nav>
        </div>
      </div>
      {/* 
<!-- section11 end --> */}
    </Fragment>
  )
}

export default Footer
