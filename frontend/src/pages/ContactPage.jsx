import React from 'react'
import NavigationBar from '../components/Navbar'
import Form from '../components/Form'
import Discount from '../components/Discount'
import Brands from '../components/Brands'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <div>
        <NavigationBar />

        <div className="py-5 hero-header">
          <h1 className="text-center text-white fw-semibold display-4">
              CONTACT US
          </h1>
        </div>

        <Form />
        <Discount />
        <Brands />
        <Contact />
      
    </div>
  )
}

export default ContactPage
