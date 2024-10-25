import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Dropdown, Spinner, Stack } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FetchUser, { UserContext } from '../utils/userContext';
import { getInitial } from '../utils/helper';
import { logout } from '../utils/api';

const NavigationBar = () => {
    const { user, loading } = useContext(UserContext);

    const handleLogout = async () => {
        await logout();
    };

  return (
    <div>
        <Navbar 
            expand="lg" 
            className="bg-body-tertiary hero-header" 
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand href="/">BARBERSHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='justify-content-center' id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/service" className="nav-link">Services</NavLink>
                        <NavLink to="/about" className="nav-link">About Us</NavLink>
                        <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </Nav>

                    <Stack className="col-12 d-lg-none" gap={3}>
                        {loading ? (
                            <Spinner animation="border" variant='light' />
                        ): user ? (
                            <Dropdown align={'start'}>
                                <Dropdown.Toggle className='rounded-circle' id="dropdown-button-dark-example1" variant="success">
                                    {getInitial(user?.name)}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item active>
                                        <Link className='text-white' to={'/appointment'}>
                                            Book Appointment
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link className='text-white' to={'/dashboard'}>
                                            Dashboard
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogout}>
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ):(
                            <div>
                                <Link to={'/login'}>
                                    <Button variant='dark' className='w-100 rounded-0'>
                                        Login
                                    </Button>
                                </Link>
                                <Link to={'/appointment'}>
                                    <button type="button" className="w-100 btn btn-outline-warning text-bright rounded-0">
                                        BOOK APPOINTMENT
                                    </button>
                                </Link>
                            </div>
                        )}
                    </Stack>

                    <Stack className='d-none d-lg-block' direction="horizontal">
                        {loading ? (
                            <Spinner animation="border" variant='light' />
                        ): user ? (
                            <NavDropdown 
                                title={user?.name} 
                                id="basic-nav-dropdown" 
                                className='text-white my-2'
                            >
                                <NavDropdown.Item>
                                    <Link className='text-white' to={'/appointment'}>
                                        Book Appointment
                                    </Link>
                                </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='text-white' to={'/dashboard'}>
                                            Dashboard
                                        </Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                        ):(
                            <div>
                                <Link to={'/login'}>
                                    <Button variant='dark' className='rounded-0'>
                                        Login
                                    </Button>
                                </Link>
                                <Link to={'/appointment'}>
                                    <button type="button" className="btn btn-outline-warning text-bright rounded-0">
                                        BOOK APPOINTMENT
                                    </button>
                                </Link>
                            </div>
                        )}
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar
