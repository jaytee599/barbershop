import React from 'react'
import NavigationBar from '../components/Navbar'
import Barbers from '../components/Barbers'
import Stats from '../components/Stats'
import Discount from '../components/Discount'
import Brands from '../components/Brands'
import Contact from '../components/Contact'

const About = () => {
  return (
    <div>
        <NavigationBar />

        <div className="py-5 hero-header">
          <h1 className="text-center text-white fw-semibold display-4">ABOUT US</h1>
        </div>

        <Barbers />
        <Stats />
        <Discount />
        <Brands />
        <Contact />
      
    </div>
  )
}

export default About
