import React from 'react'
import NavigationBar from '../components/Navbar'
import ServiceComp from '../components/ServiceComp'
import OtherService from '../components/OtherService'
import Review from '../components/Review'
import News from '../components/News'
import Contact from '../components/Contact'

const Service = () => {
  return (
    <div>
        <NavigationBar />

        <div className="py-5 hero-header">
          <h1 className="text-center text-white fw-semibold display-4">SERVICES</h1>
        </div>

        <ServiceComp  />
        <OtherService />
        <Review />
        <News />
        <Contact />
      
    </div>
  )
}

export default Service
