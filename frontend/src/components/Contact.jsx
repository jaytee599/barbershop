import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
        <section className="p-5 text-center">
            <div className="container">
                <h2>CONTACT US</h2>
                <p>
                    Have a question? Need assistance? Don't hesitate to contact us. We're here to help!
                </p>

                <div className="row mt-5 mx-auto">
                    <div className="col-6 col-lg-3 text-center">
                        <FaLocationDot size={50} className="text-sec" />
                        <h4 className="fw-semibold">ADDRESS</h4>
                        <p className="">15 Harding Avenue North York M6M 0A4</p>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <GoClockFill size={50} className="text-sec" />
                        <h4 className="fw-semibold">WORKING HOURS</h4>
                        <p className="">Mon-Fri: 10am - 6pm <br /> Sat-Sun: 10am - 6pm</p>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <MdEmail size={50} className="text-sec" />
                        <h4 className="fw-semibold">EMAIL</h4>
                        <p className="">info@company.com</p>
                    </div>
                    <div className="col-6 col-lg-3 text-center">
                        <FaPhone size={50} className="text-sec" />
                        <i className="text-sec bi bi-telephone"></i>
                        <h4 className="fw-semibold">PHONE</h4>
                        <p className="">(+63) 555 1212</p>
                    </div>
                    
                </div>
            </div>
        </section>

        <div className="container">
            <hr className="sec" />
        </div>

        <footer className="text-center">
            <p className="">&copy; Barbershop 2024</p>
        </footer>
      
    </div>
  )
}

export default Contact
