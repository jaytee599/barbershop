import React from 'react'
import Stats from '../components/Stats'
import Discount from '../components/Discount'
import Review from '../components/Review'
import Brands from '../components/Brands'
import Contact from '../components/Contact'
import NavigationBar from '../components/Navbar'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <NavigationBar />

        <div className="py-5 hero-header">
            <div className="d-flex justify-content-center p-5">
                <img src="/Logo.png" className="img-fluid" alt="Logo" width="500" height="500" />
            </div>
        </div>

        <Row className='bg-dark mb-1' xs={1} md={2}>
          <Col>
            <img 
              src="/Services.png" 
              className="img-fluid" 
              alt="Logo" 
            />
          </Col>
          <Col>
            <img 
              src="/barb.jpg" 
              className="img-fluid" 
              alt="Logo" 
            />
          </Col>
        </Row>

        <Stats />
        <Discount />
        <Review />
        <Brands />
        <Contact />
    </div>
  )
}

export default Home
