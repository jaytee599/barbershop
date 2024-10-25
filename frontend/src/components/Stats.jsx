import React from 'react'
import { TiScissorsOutline } from "react-icons/ti";
import { BsShop } from "react-icons/bs";
import { FaCuttlefish } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="bg-dark">
        <div className="container p-5 row mx-auto">
            <div className="col-4 text-center text-white">
                <FaCuttlefish size={50} className='text-sec' />
                <h2 className="text-sec fw-semibold mt-1">2500</h2>
                <p className="text-white">SHAVES</p>
            </div>
            <div className="col-4 text-center text-white">
                <TiScissorsOutline size={50} className="text-sec" />
                <h2 className="text-sec fw-semibold mt-1">4500</h2>
                <p className="text-white">HAIRCUTS</p>
            </div>
            <div className="col-4 text-center text-white">
                <BsShop size={50} className="text-sec" />
                <h2 className="text-sec fw-semibold mt-1">23</h2>
                <p className="text-white">OPEN SHOPS</p>
            </div>
        </div>
    </div>
  )
}

export default Stats
