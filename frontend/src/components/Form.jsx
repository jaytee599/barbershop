import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import toast from 'react-hot-toast'
import SpinnerComp from './Spinner'
import axios from 'axios'

const Form = () => {
    const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const contact = {
            name, 
            email, 
            subject, 
            message
        }

        try {
            setLoading(true)
            const response = await axios.post(
                `${apiUrl}/contact/create`, 
                contact
            )
            // console.log('Contact:', response)
            if (response.status === 201) {
                toast.success("Message Submitted Successfully")

                setName("")
                setEmail("")
                setSubject("")
                setMessage("")
            }
        } catch (error) {
            toast.error("Something went wrong, Try Again!")
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="service-header p-5">
        <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white text-center">
                <h1 className="text-white mb-4">COME VISIT US</h1>
                <h4>OFFICE</h4>
                <p className="">15 HARDING AVENUE NORTH YORK M6M 0A4</p>
                
                <div>
                    <h4>CONTACT</h4>
                    <p>info@company.com <br /> contact@company.com</p>
                </div>

                <div>
                    <h4>WORKING HOURS</h4>
                    <p>Monday - Saturday: 10am - 6pm <br /> Sunday: 10am - 7pm</p>
                </div>
            </div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    className="form-control rounded-0" 
                                    id="name" 
                                    placeholder="Your Name"
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} 
                                />
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input 
                                    type="email" 
                                    className="form-control rounded-0" 
                                    id="email" 
                                    placeholder="Your Email"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} 
                                />
                                <label htmlFor="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating" id="date3">
                                <input 
                                    type="text" 
                                    className="form-control rounded-0" 
                                    id="subject" 
                                    placeholder="Subject"
                                    required
                                    onChange={(e) => setSubject(e.target.value)} 
                                    value={subject}
                                />
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating">
                            <textarea 
                                className="form-control rounded-0" 
                                placeholder="Special Request"
                                id="message"
                                required
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                style={{height: '8rem'}}>
                            </textarea>
                            <label htmlFor="message">Special Request</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <Button
                                type='submit' 
                                className="bg-brighter text-white rounded-0 w-100" 
                                variant="outline-warning"
                            >
                                {loading ? <SpinnerComp /> : 'SEND MESSAGE'}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form
