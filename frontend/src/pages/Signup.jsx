import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import SpinnerComp from '../components/Spinner';

const Signup = () => {
  const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      name,
      email,
      password,
    };

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!")
    } else {
      try {
        setLoading(true)
        const response = await axios.post(
          `${apiUrl}/auth/register`,
          userData, 
          { withCredentials: true }
        )
        // console.log('SignUp User Data:', response)
        if (response.status === 201) {
          toast.success("Account Created Successfully")
          navigate('/login')

          setName('')
          setEmail('')
          setPassword('')
          setConfirmPassword('')
        }
      } catch (error) {
          toast.error('Something went wrong. Please try again!');
          console.log(error.response?.data?.message);
      } finally {
        setLoading(false)
      }
    }
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mx-1 mx-md-4 mt-4">
                      Sign Up
                    </p>
                    <p className="mb-5 text-center">Already have an account? 
                      <Link to={'/login'} href="">Login</Link>
                    </p>

                    <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                      <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          required
                          onChange={(e) => setName(e.target.value)} 
                          value={name} 
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input 
                          type="email"
                          className="form-control" 
                          id="email" 
                          required 
                          onChange={(e) => setEmail(e.target.value)}
                          value={email} 
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="password" 
                          required 
                          onChange={(e) => setPassword(e.target.value)}
                          value={password} 
                        />
                      </div>

                      <div className="mb-4">
                        <label htmlFor="confirm-password" className="form-label">
                          Confirm your Password
                        </label>
                        <input 
                          type="password" 
                          className="form-control" 
                          id="confirm-password" 
                          required 
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          value={confirmPassword} 
                        />
                      </div>

                      <div className="d-flex justify-content-center mb-3 mb-lg-4">
                        <Button type='submit' className='w-100'>
                          {loading ? <SpinnerComp /> : 'Register'}
                        </Button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <Link to={'/'}>
                      <img 
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" 
                        alt="Sample image" 
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup