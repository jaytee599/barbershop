import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { allAppointments, allMessages, allUsers } from '../utils/api';
import { Spinner, Table } from 'react-bootstrap';
import { formatDateTime, formatTime } from '../utils/helper';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([])
  const [messages, setMessages] = useState([])
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const response = await allAppointments()
        // console.log('Appointments:', response)
        setAppointments(response)
      } catch (error) {
        console.error('Error fetching appointments:', error);
        // setError(error);
      } finally {
        setLoading(false)
      }
    }

    getAppointments()
  }, [])

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await allMessages()
        // console.log('Messages:', response)
        setMessages(response)
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }

    getMessages()
  }, [])

  useEffect(() => {
    const totalUsers = async () => {
      try {
        const response = await allUsers()
        // console.log(response)
        setUsers(response)
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }

    totalUsers()
  }, [])

  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">BarberShop</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Admin Dashboard</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='p-4'>
        <h2>
          <span className='text-primary fs-1 fw-bold'>
            {users.length}
          </span> Registered Users
        </h2>
      </div>

      <div className='p-4'>
        <h2>All Appointments</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Client Request</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className='' colSpan={5}>
                  <Spinner animation="grow" />
                </td>
              </tr>
            ) : appointments.length > 0 ? (
              appointments.map((a) => (
                <tr key={a.id}>
                  <td>{a.name}</td>
                  <td>{a.email}</td>
                  <td>{a.service}</td>
                  <td>{a.request}</td>
                  <td>{formatDateTime(a.date)} - {formatTime(a.time)}</td>
                </tr>
              ))
            ):(
              <tr>
                <td>No Appointments Available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      <div className='p-4'>
        <h2>All Messages</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.subject}</td>
                  <td>{m.message}</td>
                </tr>
              ))
            ):(
              <tr>
                <td>No Messages Available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      
    </div>
  )
}

export default Dashboard
