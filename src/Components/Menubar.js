import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Menubar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/resources">Resources</Nav.Link>
                            <NavDropdown title="Events" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
                                <NavDropdown.Item href="/monthly">Monthly Calendar</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/upcoming-events">Upcoming Events</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contactus" >
                                Contact Us
                            </Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                   
                </Navbar>
                
            </div>
 
        )
    }
}