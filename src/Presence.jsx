import React, { Fragment } from 'react'
import './Presence.css'

const Presence = () => {
    return (
        <Fragment>
            {/* section1 */}
            <div className="section1">
                <div className="container-fluid">
                    <div className="row row1">
                        <div className="col">
                            <div className="wrap-hr">

                            </div>

                        </div>
                        <div className="col">
                            <h1 className="FONTSIZE">FUTURE</h1>
                        </div>
                        <div className="col">
                            <div className="wrap-hr">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* section2 */}
            <div className="section2">
                <div className="container">
                    <div className="row">
                        <div className="col wrap-hr">
                            <hr className='centered-hr' />
                        </div>
                        <div className="col-auto">
                            <h1 className='heading'>FACTORIES AT</h1>
                            <h2 className='heading'>FARIDABAD</h2>
                        </div>
                        <div className="col wrap-hr">
                            <hr className='centered-hr' />
                        </div>
                    </div>
                </div>
            </div>

            {/* section3 */}

            <div className="section3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col img1">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col img2">
                            <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/engineer-checking-packaging-automation-process-5491625-4606229.png?f=webp" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col img3">
                            <img className='img-fluid machine' src="https://media.istockphoto.com/id/180809685/photo/robotic-arm-on-a-production-line.jpg?s=612x612&w=0&k=20&c=3DZiAJvAC2pPAzsAWz13bwvgw0H1pF5kERVyLvKN9KM=" alt="" />
                        </div>
                        <div className="col img4">
                            <img className='img-fluid machine' src="https://img.freepik.com/premium-photo/cardboard-boxes-conveyor-belt-parcels-transportation-system-concept_67340-721.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* section4 */}

            <div className="section4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <img className='img-fluid' src="https://graphicpanda.net/wp-content/uploads/2019/01/Free-World-Map-for-PowerPoint-12-576x324.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Presence