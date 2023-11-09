import React, { Fragment } from 'react'
import './Home.css'
import { FaRegThumbsUp } from 'react-icons/fa6'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { MdOutlineSecurity } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <Fragment>

      {/* <!-- (section3)slides start --> */}

      <div className="slider">
        <div className="slider-inner">

          <div className="container-fluid">
            <div className="row">
              <div id="carouselExampleIndicators" className="carousel slide my-slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="img-fluid" src="https://img.freepik.com/premium-photo/cuttingedge-machinery-operating-within-manufacturing-facility-generative-ai_94628-1117.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src="https://img.freepik.com/premium-photo/robotic-arm-modern-industrial-technology-automated-production-cell_564276-11985.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img className="img-fluid" src="https://img.freepik.com/premium-vector/smart-manufacture-factory-conveyor-modern-industrial-manufacturing-computer-controlled-factory-machines-line-illustration_102902-981.jpg" className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- (section3)slides end -->

<!-- section4 --> */}


      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 section4-row">
          <div class="col">
            <div className="section-icon">
              <Link to=""><TfiHeadphoneAlt className='icon' /></Link>
            </div>
            <div className="section-content">
              <h6>Expert Support</h6>
              <p>Contact support team</p>
            </div>
          </div>
          <div class="col">
            <div className="section-icon">
              <Link to=""><FaRegThumbsUp className='icon' /></Link>
            </div>
            <div className="section-content">
              <h6>100% Accuracy</h6>
              <p>Perfection with finishing</p>
            </div>
          </div>
          <div class="col">
            <div className="section-icon">
              <Link to=""><MdOutlineSecurity className='icon' /></Link>
            </div>
            <div className="section-content">
              <h6>Security checkout</h6>
              <p>Safe and trustworthy</p>
            </div>
          </div>
          <div class="col">
            <div className="section-icon">
              <Link to=""><FiSettings className='icon' /></Link>
            </div>
            <div className="section-content ">
              <h6>Personalise modification</h6>
              <p>Modify on requirements</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- section4 end -->

<!-- (section5) image --> */}

      <div className="section5">
        <div className="section5-inner">

          <div className="container">
            <div className="row section5-row">

              <div className="col-md-6 part-1">
                <img src="https://cdn.wallpapersafari.com/79/56/NseIoH.jpg" className="section5-img" alt="" />
              </div>

              <div className="col-md-6 part-2">
                <h6 className="heading">ABOUT OUR COMPANY</h6>
                <h1 className="sub-heading">WE ARE RUDRA PACKAGING IN FARIDABAD,
                  HARYANA, INDIA</h1>
                <p className="paragraph">Established in 1980, Maharshi Group has an expansive history of innovation and breakthroughs in a wide range of industries such as pharmaceutical, distilleries, pesticide, brewery, cosmetic, lubricant, edible oil, food and ancillaries. Today it is a multi-product, multi-location engineering group with proven capabilities in design, development and manufacturing of labelling machines, packaging machinery and material.</p>
                <button className="button">our services</button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* <!-- (section5) image -->

<!-- section6 --> */}

      <div className="section6">
        <div className="section6-inner">

          <div className="container-fluid">
            <div className="row section6-row">

              <div className="row part-1">
                <div className="col-md-12">
                  <h1 className="heading">TECHNICAL PRODUCT CATEGORIES</h1>
                </div>
              </div>
              <div className="row part-2">

                <div className="col-md-3">
                  <img className="image" src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/home/technical-cat1.webp" alt="" />
                  <h6 className="sub-heading">Labelling Machines</h6>
                </div>
                <div className="col-md-3">
                  <img className="image" src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/home/technical-cat2.webp" alt="" />
                  <h6 className="sub-heading">Sticker labels & flexible</h6>
                </div>
                <div className="col-md-3">
                  <img className="image" src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/home/technical-cat3.webp" alt="" />
                  <h6 className="sub-heading">Packaging Lines</h6>
                </div>
                <div className="col-md-3">
                  <img className="image" src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/home/technical-cat4.webp" alt="" />
                  <h6 className="sub-heading">Automation Division</h6>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>


    </Fragment>



  )
}

export default Home
