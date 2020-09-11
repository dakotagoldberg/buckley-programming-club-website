import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
import Logo from '.././assets/logo.png'

const Styles = styled.div`
    .navbar {
        background-color: transparent;
        margin-top: 25px;
        margin-bottom: 2.5%;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: white;
        font-weight: 700;
        font-size: 20px;
        margin-right: 5px;
        margin-left: 5px;

        &:hover {
            color: #646DDF;
        }
    }
    .dropdown-menu {
        background: #1B1C3D;
        border-radius: 10px;
    }
    .dropdown-item {
        color: white;
        font-size: 20px;
        font-weight: 700;
        background: transparent;
        &:hover {
            background: transparent;
            color: #646DDF;
        }
        &:focus {
            background: transparent;
            color: #646DDF;
        }
    }
    .dropdown:hover>.dropdown-menu {
        display: block;
      }
    
    .special {
        background: #505CCE60;
        border-radius: 10px;
        padding-left: 5px;
        padding-right: 5px;
    }
`;

export default function NavigationBar() {
    return (
        <Styles>
            <Navbar expand='lg'>
    <Navbar.Brand href='/'>
    <img
        src={Logo}
        height="50"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-basic-nav' className='navbar-dark' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        {/* <Nav.Item><Nav.Link href='/about'>about</Nav.Link></Nav.Item> */}
                        <Nav.Item className='special' ><Nav.Link href='/club-fest'>club fest</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/schedule'>schedule</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/projects'>projects</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/challenges'>challenges</Nav.Link></Nav.Item>
                        <NavDropdown title="members" id="collapsable-nav-dropdown" variant='dark' renderMenuOnMount={true}>
                            {/* <NavDropdown.Item href='/join'>join</NavDropdown.Item> */}
                            <NavDropdown.Item href='/contribute'>contribute</NavDropdown.Item>
                            <NavDropdown.Item href='/attendance'>attendance</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
