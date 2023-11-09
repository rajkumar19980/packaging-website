import React, { Fragment } from 'react'
import './About.css'




const About = () => {
    return (

        <Fragment>
            {/* section 1 */}
            <div className=" section1">
                <div className="row">

                    <div className="col-md-12">
                        <h1 className="heading">A Name You Can Trust</h1>
                        <img className='img-fluid' src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/about-banner.png" alt="" />
                    </div>

                </div>

            </div>

            {/* section2 */}
            <div className="section2">
                <div className="section2-inner">

                    <div className="container">
                        <div className="row section2-row">
                            <div className="col-md-12">
                                <h6 className="heading">About Us</h6>
                                <p className="para">With India leaning towards becoming self-reliant, the role of packaging machinery & material is becoming more important than ever. Playing this vital role in design and manufacturing, Maharshi Group is forging its way with innovation and breakthroughs in a wide range of industries such as pharmaceuticals, cosmetics, lubricants, edibles and many more. Established four decades ago in 1980, the group has followed three fundamentals towards its success journey:</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* section3 */}
            <div className="section3">
                <div className="section3-inner">

                    <div className="container-fluid">
                        <div className="row section3-row">
                            <div className="col-md-12">
                                <img className="image" src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/about-banner-ppp.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* section4 */}

            <div className="container section-4">
                <div className="row section4 ">
                    <div className="offset-col-md-2 col-md-2 ">
                        <hr className='section4-line ' />
                    </div>
                    <div className="col-md-4">
                        <marquee behavior="scroll" scrollamount="10" direction=""><h3>40+ YEARS OF EXPERIENCE</h3></marquee>

                    </div>
                    <div className="col-md-2 offset-col-md-2">
                        <hr className='section4-line' />
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12">
                        <img className='img-fluid section4-img' src="https://maharshi.com/wp-content/themes/twentytwentyone/assets/images/all-clients.webp" alt="" />
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default About
