import React from 'react'
import { Link } from 'react-router-dom'

const Discount = () => {
  return (
    <section className="bg-brighter p-5">
        <div className="container">
            <h1 className="fw-bold display-5">25% DISCOUNT</h1>
            <p className="w-75">
              Need a fresh cut? 💇 Enjoy 25% off all haircuts and services at BarberShop! Book your appointment today and look your best.✂️
            </p>
            <Link to={'/appointment'}>
              <button type="button" className="btn btn-dark rounded-0 text-brighter">
                BOOK NOW
              </button>
            </Link>
        </div>
    </section>
  )
}

export default Discount
