import React from 'react';
import pie_logo from './images/logo-pieinthesky.png'
import { Routes, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';


const Navebar = ({ children }) => {
    return (
        <>
            <Navbar variant="light" className='nav-main'>
                <img src={pie_logo} alt="Logo" className='pie-logo' />
                <Navbar.Brand className='heading'>Pie In The Sky</Navbar.Brand>
            </Navbar>
          
            <div className="sidebar">
                <Link to='/'>Home</Link>
                <Link to='/Add_Items'>Add Items</Link>
                <Link to="/New_Orders">New Orders</Link>
                <Link to="/Accepted_Orders">Accepted Orders</Link>
                <Link to="/Rejected_Orders">Rejected Orders</Link>
            </div>
            <Navbar className='nav-mobile' expand="lg">
                <Container fluid>
                    <Navbar.Brand > <img src={pie_logo} alt="Logo" className='pie-logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav> <Link to='/' className='link-mobile'> Home </Link> </Nav>
                            <Nav > <Link to='/Add_Items' className='link-mobile'> Add Items</Link> </Nav>
                            <Nav >  <Link to="/New_Orders" className='link-mobile'> New Orders </Link> </Nav>
                            <Nav > <Link to="/Accepted_Orders" className='link-mobile'> Accepted Orders </Link> </Nav>
                            <Nav > <Link to="/Rejected_Orders" className='link-mobile'>  Rejected Orders </Link> </Nav>

                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="content">
                {children}
            </div>


        </>
    )
}

export default Navebar
