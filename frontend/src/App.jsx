import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Blog from './pages/Blog'
import Service from './pages/Service'
import ContactPage from './pages/ContactPage'
import Appointment from './pages/Appointment'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import UserProvider from './utils/userContext'

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/service' element={<Service />} />
            <Route path='' element={<PrivateRoute />}>
              <Route path='/appointment' element={<Appointment />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
