import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Menubar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#">Trend</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Features</Nav.Link>
                            <NavDropdown title="Products" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" >
                                Contact Us
                            </Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}