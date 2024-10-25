import React from 'react'
import { Link } from 'react-router-dom'

const OtherService = () => {
  return (
    <div className="bg-dark text-white p-5">
        <div className="container text-center">
            <div className="row gx-5 mx-auto">
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            HAIRCUT
                            <div className="horizontal px-1"></div>
                            $20
                        </div>
                        <p className="d-flex">
                            Get a sharp new look with our expert haircut service.
                        </p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            TRIMMING
                            <div className="horizontal px-1"></div>
                            $13
                        </div>
                        <p className="d-flex">
                        Get a sharp new look with our expert trim service.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row gx-5 mx-auto">
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            SHAVINGS
                            <div className="horizontal px-1"></div>
                            $13
                        </div>
                        <p className="d-md-flex">
                            Get a clean and fresh look with our expert shaving service
                        </p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <div className="d-flex align-items-center gap-2">
                            FACIAL
                            <div className="horizontal px-1"></div>
                            $20
                        </div>
                        <p className="d-flex">
                            Our facial service will leave you feeling and looking your best.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-5 d-flex justify-content-center overflow-x-hidden">
            <div className="col-md-7">
                <div className="bg-warning p-5">
                    <h6>THIS WEEKS NEW PRODUCT</h6>
                    <h1 className="fw-bold">25% DISCOUNT</h1>
                    <p className="">
                        Need a fresh cut? 💇 Enjoy 25% off all haircuts and services at BarberShop! Book your appointment today and look your best.✂️
                    </p>
                    <Link to={'/appointment'}>
                        <button type="button" className="btn btn-dark rounded-0">
                            BOOK NOW
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-md-5 d-none d-md-block">
                <div className="">
                    <img src="/img.png" className="" alt="" height="280" width="400" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherService
