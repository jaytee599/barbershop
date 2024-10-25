import React, { useState } from 'react'
import NavigationBar from '../components/Navbar'
import SpinnerComp from '../components/Spinner'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { usePaystackPayment } from 'react-paystack'

const Appointment = () => {
  const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL
  const paystackKey = import.meta.env.VITE_PUBLIC_PAYSTACK_PUBLIC_KEY
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [request, setRequest] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [loading, setLoading] = useState(false)
  const [selection, setSelection] = useState(
    { service: '', amount: 0 }
  );

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    const servicePrices = {
      haircut: 20,
      trim: 13,
      shave: 13,
      facial: 20,
    };
    
    setSelection({
      service: selectedService,
      amount: servicePrices[selectedService] || 0,
    });
  };

  const componentProps = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: selection.amount * 100,
    currency: 'GHS',
    publicKey: paystackKey,
    text: "Pay Now",
  };

  const initializePayment = usePaystackPayment(componentProps)

  const onSuccess = (reference) => {
    console.log(reference);
    alert("Thanks for doing business with us! Come back soon!!")
  };

  const onClose = () => {
    console.log('Closed');
    alert("Wait! You need this oil, don't go!!!!")
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const appointment = {
      name, 
      email, 
      request,
      service: selection.service, 
      date, 
      time
    }

    try {
      setLoading(true)
      const response = await axios.post(
        `${apiUrl}/appointment/create`, 
        appointment
      )
      // console.log("Appointemt:", response)
      if (response.status === 201) {
        toast.success("Appointment Successfully Booked!")
        setName("")
        setEmail("")
        setDate("")
        setRequest("")
        setTime("")
        setSelection({ service: "", amount: 0})
        initializePayment(onSuccess, onClose)
      }
    } catch (error) {
      console.log(error)
      toast.error("Appointment was not submitted, Try Again!")
    } finally {
      setLoading(false)
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="py-5 booking">
        <div className="p-5">
          <div className="row g-5 align-items-center">
            <div className="col-md-6 text-white">
              <h6 className="text-white text-uppercase">Book an Appointment</h6>
              <h1 className="text-white mb-4">Online Booking</h1>
              <p className="mb-4">
                Book your appointment online now! Choose your preferred time and barber, and we'll confirm your booking.
              </p>
              <p className="mb-4">
                Skip the waitlist! Book your haircut online at your convenience. Our easy-to-use booking system makes it hassle-free.
              </p>
              <p className='mb-4'>
                Book online and enjoy: Flexible scheduling, personalized service, and no more waiting in line.
              </p>
            </div>
            <div className="col-md-6">
              <h2 className="text-white mb-4">Book Your Appointment Now</h2>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name"
                        required 
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email"
                        required 
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating" id="date3">
                      <input 
                        type="date" 
                        className="form-control" 
                        id="datetime"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)} 
                      />
                      <label htmlFor="datetime">Date</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating" id="date3">
                      <input 
                        type="time" 
                        className="form-control" 
                        id="datetime"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)} 
                      />
                      <label htmlFor="datetime">Time</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <select 
                        name="" 
                        id="select1" 
                        className="form-select" 
                        required
                        value={selection.service} 
                        onChange={handleServiceChange}
                      >
                        <option>Select a Service</option>
                        <option value="haircut">Haircut - $20</option>
                        <option value="trim">Trim - $13</option>
                        <option value="shave">Shave - $13</option>
                        <option value="facial">Facial - $20</option>
                      </select>
                      <label htmlFor="select1">Type of Service</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea 
                        className="form-control" 
                        placeholder="Special Request" 
                        id="message"
                        value={request}
                        onChange={(e) => setRequest(e.target.value)} 
                        style={{height: "100px"}}>
                      </textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <Button 
                      disabled={selection.service === ""} 
                      type='submit' 
                      className='w-100' 
                      variant="outline-light"
                    >
                      {loading ? <SpinnerComp /> : 'Make Payment and Book'}
                    </Button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
