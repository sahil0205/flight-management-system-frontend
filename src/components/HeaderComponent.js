import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {GiAirplaneDeparture} from 'react-icons/gi';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div >
                <Navbar collapseOnSelect expand="md" variant="light" className="navbar-color">
                    <div className="container-fluid">
                        <Navbar.Brand href="#"><h3><GiAirplaneDeparture/>BookMyFlight</h3></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav >
                                <Nav.Link href="#aboutus">About Us</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <NavDropdown title="Account" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#login">Login</NavDropdown.Item>
                                    <NavDropdown.Item href="#register">Register</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;