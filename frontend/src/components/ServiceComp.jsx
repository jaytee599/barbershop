import React from 'react'
import { GiHairStrands } from "react-icons/gi";

const ServiceComp = () => {
  return (
    <div className="service-header">
        <div className="container p-5">
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div 
                        // style={{ height: '16rem' }} /
                        className="p-4 card sec rounded-0 text-center text-bg-dark mb-3"
                    >
                        <div className="card-body">
                            <GiHairStrands size={50} className='text-sec' />
                            <h5 className="card-title">HAIRCUT & BEARD TRIM</h5>
                            <p className="card-text">
                                Get a sharp new look with our expert haircut and trim services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div 
                        // style={{ height: '16rem' }} 
                        className="p-4 card sec rounded-0 text-center text-bg-dark mb-3"
                    >
                        <div className="card-body">
                            <GiHairStrands size={50} className='text-sec' />
                            <h5 className="card-title">SHAVES & HAIRCUT</h5>
                            <p className="card-text">
                                Get a clean and fresh look with our expert shaving and haircut services.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div 
                        // style={{ height: '16rem' }} 
                        className="p-4 card sec rounded-0 text-center text-bg-dark mb-3"
                    >
                        <div className="card-body">
                            <GiHairStrands size={50} className='text-sec' />
                            <h5 className="card-title">FACIAL AND SHAVE</h5>
                            <p className="card-text">
                                Need a complete grooming package? Our facial and shaves will leave you feeling and looking your best.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div 
                        // style={{ height: '20rem' }} 
                        className="p-4 card sec rounded-0 text-center text-bg-dark mb-3"
                    >
                        <div className="card-body">
                            <GiHairStrands size={50} className='text-sec' />
                            <h5 className="card-title">FACIAL</h5>
                            <p className="card-text">
                                Refresh your appearance with a professional facial service
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div 
                        // style={{ height: '16rem' }} 
                        className="p-4 col card sec rounded-0 text-center text-bg-dark mb-3"
                    >
                        <div className="card-body">
                            <GiHairStrands size={50} className='text-sec' />
                            <h5 className="card-title">MUSTACHE TRIMMING</h5>
                            <p className="card-text">
                                Perfect your mustache with our expert trimming services. Get the exact shape and style you want.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div 
                        // style={{ height: '16rem' }} 
                        className="p-4 col card sec rounded-0 text-center text-bg-dark mb-3"
                    >
                        <div className="card-body">
                            <GiHairStrands size={50} className='text-sec' />
                            <h5 className="card-title">HAIR STYLING</h5>
                            <p className="card-text">
                                Transform your hair with our expert styling services. From cuts and colors to updos and styling, we have it all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceComp
